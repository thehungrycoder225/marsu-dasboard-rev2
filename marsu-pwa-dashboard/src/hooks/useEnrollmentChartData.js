import { useMemo } from 'react';
import { enrollmentData } from '../data/data-source';

/**
 * Custom hook to filter and format enrollment data for ApexCharts.
 * @param {number} selectedYear - The year to filter the data by.
 * @returns {Object} - Formatted data for ApexCharts.
 */
export const useEnrollmentChartData = (selectedYear) => {
  const chartData = useMemo(() => {
    // Find the data for the selected year
    const yearData = enrollmentData.find(
      (entry) => entry.year === selectedYear
    );

    if (!yearData) {
      return { categories: [], series: [] };
    }

    // Aggregate total enrollment per branch
    const categories = yearData.data.map((branch) => branch.branch_name);
    const series = yearData.data.map((branch) => {
      const totalEnrollment = branch.series.reduce((sum, program) => {
        return (
          sum +
          program.data.reduce(
            (programSum, value) => programSum + (value || 0),
            0
          )
        );
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
  }, [selectedYear]);

  return chartData;
};
