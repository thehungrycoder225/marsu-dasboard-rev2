import { useMemo } from 'react';
import { enrollmentData, licensureExamsData } from '../data/data-source';

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

      console.log(
        `Branch: ${branch.branch_name}, Total Enrollment: ${totalEnrollment}`
      );

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
  console.log('Chart Data:', chartData);
  // Return the formatted data for ApexCharts

  return chartData;
};

export const useChartData = () => {
  return useMemo(() => {
    const processEnrollmentData = () => {
      const branches = enrollmentData.map((branch) => branch.branch_name);
      const priorityData = enrollmentData.map((branch) =>
        branch.series[0].data.reduce((sum, value) => sum + (value || 0), 0)
      );
      const nonPriorityData = enrollmentData.map((branch) =>
        branch.series[1].data.reduce((sum, value) => sum + (value || 0), 0)
      );

      const branchOverview = {
        categories: branches,
        series: [
          { name: 'Priority Program', data: priorityData },
          { name: 'Non-Priority Program', data: nonPriorityData },
        ],
      };

      const programDrilldown = enrollmentData.map((branch) => ({
        branchName: branch.branch_name,
        categories: branch.categories,
        series: branch.series.map((s) => ({
          name: s.name,
          data: s.data.map((value) => value || 0),
        })),
      }));

      const programPopularity = enrollmentData.reduce((acc, branch) => {
        branch.categories.forEach((category, index) => {
          acc[category] =
            (acc[category] || 0) +
            (branch.series[0].data[index] || 0) +
            (branch.series[1].data[index] || 0);
        });
        return acc;
      }, {});

      const crossBranch = Object.entries(programPopularity).map(
        ([name, value]) => ({ x: name, y: value })
      );
      return { branchOverview, programDrilldown, crossBranch };
    };

    const processLicensureData = () => {
      const branchNames = licensureExamsData.map(
        (branch) => branch.branch_name
      );
      const firstTimeTakers = licensureExamsData.map((branch) =>
        branch.series
          .find((series) => series.name === 'First Time Takers')
          .data.reduce((sum, value) => sum + value, 0)
      );
      const passed = licensureExamsData.map((branch) =>
        branch.series
          .find((series) => series.name === 'Passed')
          .data.reduce((sum, value) => sum + value, 0)
      );

      const licensurePerformancePerCategory = licensureExamsData.map(
        (branch) => {
          const { branch_name: branchName, categories, series } = branch;

          const formattedData = categories.map((program, index) => {
            const getSeriesData = (name) =>
              series.find((s) => s.name === name)?.data[index] || 0;

            return {
              x: program,
              y: parseFloat(getSeriesData('Passing Rate').toFixed(2)),
              firstTimeTakers: getSeriesData('First Time Takers'),
              passed: getSeriesData('Passed'),
            };
          });

          return {
            branch: branchName,
            data: formattedData,
          };
        }
      );

      const licensureBranchPerformance = {
        categories: branchNames,
        series: [
          { name: 'First Time Takers', data: firstTimeTakers },
          { name: 'Passed', data: passed },
        ],
      };

      const programPassingRates = licensureExamsData.map((branch) => ({
        branch: branch.branch_name,

        data: branch.categories.map((category, index) => ({
          name: category,
          passingRate: branch.series.find(
            (series) => series.name === 'Passing Rate'
          ).data[index],
          firstTimeTakers: branch.series.find(
            (series) => series.name === 'First Time Takers'
          ).data[index],
          passed: branch.series.find((series) => series.name === 'Passed').data[
            index
          ],
        })),
      }));

      const uniquePrograms = [
        ...new Set(licensureExamsData.flatMap((branch) => branch.categories)),
      ];
      const programComparison = uniquePrograms.map((program) => ({
        program,
        branches: licensureExamsData.map((branch) => {
          const programIndex = branch.categories.indexOf(program);
          return programIndex !== -1
            ? branch.series.find((series) => series.name === 'Passing Rate')
                .data[programIndex]
            : 0;
        }),
      }));

      return {
        licensureBranchPerformance,
        licensurePerformancePerCategory,
        programPassingRates,
        programComparison,
      };
    };

    return {
      ...processEnrollmentData(),
      ...processLicensureData(),
    };
  }, []);
};

export const useChartOptions = () =>
  useMemo(
    () => ({
      bar: (categories, stacked = false, horizontal = false) => ({
        chart: { type: 'bar', height: 350, stacked },
        xaxis: { categories },
        plotOptions: { bar: { horizontal } },
        fill: { colors: ['#660033', '#FBBF24', '#323232'] },
      }),
      treemap: {
        chart: { type: 'treemap', height: 350 },
        fill: { colors: ['#660033', '#FBBF24'] },
      },
    }),
    []
  );

export const aggregateLicensureExamsData = () => {
  const groupedData = {};

  licensureExamsData.forEach(({ year, categories, series }) => {
    if (!groupedData[year]) {
      groupedData[year] = {
        categories: [],
        series: [],
      };
    }

    categories.forEach((category, index) => {
      const firstTimeTakers =
        series.find((s) => s.name === 'First Time Takers')?.data[index] || 0;
      const passingRate =
        series.find((s) => s.name === 'Passing Rate')?.data[index] || 0;
      const passed = series.find((s) => s.name === 'Passed')?.data[index] || 0;
      groupedData[year].categories.push(category);
      groupedData[year].series.push({ firstTimeTakers, passingRate, passed });
    });
  });

  return groupedData;
};

export const renderLicensureExamsData = () => {
  const aggregatedData = aggregateLicensureExamsData();
  const chartData = Object.entries(aggregatedData).map(([year, data]) => {
    return {
      year,
      categories: data.categories,
      series: [
        {
          name: 'First Time Takers',
          data: data.series.map((d) => d.firstTimeTakers || 0),
        },
        {
          name: 'Passed',
          data: data.series.map((d) => d.passed || 0),
        },
        {
          name: 'Passing Rate',
          data: data.series.map((d) => d.passingRate || 0),
        },
      ],
    };
  });

  return chartData;
};
