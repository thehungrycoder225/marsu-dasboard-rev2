import Chart from 'react-apexcharts';
import { useChartData, useChartOptions } from '../../../hooks/dataHooks';

export default function Charts() {
  const chartData = useChartData();
  const chartOptions = useChartOptions();

  return (
    <div className='w-full'>
      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>Overview</h2>
        <Chart
          options={chartOptions.bar(chartData.branchOverview.categories, true)}
          series={chartData.branchOverview.series}
          type='bar'
          height={350}
        />
      </div>

      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>
          Cross-Branch Program Popularity
        </h2>
        <Chart
          options={chartOptions.treemap}
          series={[{ data: chartData.crossBranch }]}
          type='treemap'
          height={350}
        />
      </div>

      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>
          Licensure Exams Branch-Level Performance
        </h2>
        <Chart
          options={chartOptions.bar(
            chartData.licensureBranchPerformance.categories
          )}
          series={chartData.licensureBranchPerformance.series}
          type='bar'
          height={350}
        />
      </div>

      {chartData.programPassingRates.map((branchData, index) => (
        <div key={index} className='mb-12'>
          <h2 className='text-md font-bold mb-4'>
            Program Passing Rates - {branchData.branch}
          </h2>
          <Chart
            options={chartOptions.bar(
              branchData.data.map((d) => d.name),
              false,
              true
            )}
            series={[
              {
                name: 'Passing Rate',
                data: branchData.data.map((d) => parseFloat(d.passingRate)),
              },
            ]}
            type='bar'
            height={350}
          />
        </div>
      ))}

      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>
          Comparison Across Different Programs on Passing Rate, Firstime Takers
          and Passed
        </h2>
        <Chart
          options={chartOptions.bar(['Boac', 'Gasan', 'Torrijos'], true, true)}
          series={chartData.programComparison.map((data) => ({
            name: data.program,
            data: data.branches,
          }))}
          type='bar'
          height={350}
        />
      </div>
    </div>
  );
}
