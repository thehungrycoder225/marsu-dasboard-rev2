import { useMemo } from 'react';
import { enrollmentData, licensureExamsData } from '../data/data-source';

/**
 * Utility function to filter data dynamically by branch, program, or year.
 * @param {Array} data - The dataset to filter.
 * @param {Object} filters - The filters to apply (e.g., branch, program, year).
 * @returns {Array} - Filtered data.
 */
const filterData = (data, filters) => {
  return data.filter((entry) => {
    const matchesYear = filters.year ? entry.year === filters.year : true;
    const matchesBranch = filters.branch
      ? entry.branch.name === filters.branch
      : true;
    console.log('matchesYear:', matchesYear, 'matchesBranch:', matchesBranch);
    return matchesYear && matchesBranch;
  });
};

/**
 * Custom hook to filter and format enrollment data for ApexCharts.
 * @param {Object} filters - Filters for the data (e.g., year, branch, program).
 * @returns {Object} - Formatted data for ApexCharts.
 */
export const useEnrollmentChartData = (filters) => {
  const chartData = useMemo(() => {
    const filteredData = filterData(enrollmentData, filters);

    if (!filteredData.length) {
      console.error('No data found for the given filters:', filters);
      return { categories: [], series: [] };
    }

    const categories = filteredData.map((branch) => branch.branch.name);
    const series = filteredData.map((branch) => {
      const totalEnrollment = branch.programs.reduce((sum, program) => {
        return sum + (program.priority || 0) + (program.non_priority || 0);
      }, 0);

      return totalEnrollment;
    });

    return {
      categories,
      series: [
        {
          name: 'Total Enrollment',
          data: series,
        },
      ],
    };
  }, [filters]);

  return chartData;
};

// Sample usage of the useEnrollmentChartData hook
// const { categories, series } = useEnrollmentChartData({
//   year: 2023,
//   branch: 'BSIT',
// });

/**
 * Custom hook to generate chart options dynamically.
 * @param {Object} config - Configuration for the chart (e.g., type, colors).
 * @returns {Object} - Chart options for ApexCharts.
 */

// Examp
export const useChartOptions = (config = {}) =>
  useMemo(() => {
    const {
      type = 'bar',
      colors = [],
      stacked = false,
      horizontal = false,
    } = config;
    return {
      chart: { type, height: 350, stacked },
      xaxis: {
        categories:
          config.categories && config.categories.length
            ? config.categories
            : ['No Data'],
      },
      plotOptions: { bar: { horizontal } },
      fill: {
        colors: colors.length ? colors : ['#660033', '#FBBF24', '#323232'],
      },
    };
  }, [config]);

/**
 * Utility function to calculate growth rates or percentages.
 * @param {Array} data - The dataset to process.
 * @returns {Array} - Transformed data with growth rates or percentages.
 */
const calculateGrowthRates = (data) => {
  return data.map((entry, index, arr) => {
    if (index === 0) return { ...entry, growthRate: 0 };
    const previous = arr[index - 1];
    const growthRate = ((entry.value - previous.value) / previous.value) * 100;
    return { ...entry, growthRate: parseFloat(growthRate.toFixed(2)) };
  });
};

/**
 * Custom hook to process and aggregate licensure exam data.
 * @param {Object} filters - Filters for the data (e.g., year, branch).
 * @returns {Object} - Aggregated and formatted data.
 */
export const useLicensureExamData = (filters) => {
  const aggregatedData = useMemo(() => {
    const filteredData = filterData(licensureExamsData, filters);

    if (!filteredData.length) {
      console.error('No data found for the given filters:', filters);
      return { categories: [], series: [] };
    }

    const categories = filteredData.map((branch) => branch.branch_name);
    const series = [
      {
        name: 'First Time Takers',
        data: filteredData.map((branch) =>
          branch.programs.reduce(
            (sum, program) => sum + (program.firstTimeTakers || 0),
            0
          )
        ),
      },
      {
        name: 'Passed',
        data: filteredData.map((branch) =>
          branch.programs.reduce(
            (sum, program) => sum + (program.passed || 0),
            0
          )
        ),
      },
    ];

    return { categories, series };
  }, [filters]);

  return aggregatedData;
};
