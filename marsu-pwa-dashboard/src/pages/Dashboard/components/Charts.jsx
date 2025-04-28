import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import {
  useEnrollmentChartData,
  useChartOptions,
} from '../../../hooks/dataHooks';

export default function Charts() {
  const [filters, setFilters] = useState({
    year: 2023,
    branch: null,
  });

  const enrollmentChartData = useEnrollmentChartData(filters);
  const chartOptions = useChartOptions;

  return (
    <div className='w-full'>
      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>
          Branch-Wise Enrollment Distribution
        </h2>
        <Chart
          options={chartOptions({
            categories: enrollmentChartData.categories,
            type: 'bar',
            stacked: true,
          })}
          series={enrollmentChartData.series}
          type='bar'
          height={350}
        />
      </div>

      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>
          Program-Wise Enrollment Distribution
        </h2>
        <Chart
          options={chartOptions({
            categories: enrollmentChartData.categories,
            type: 'bar',
            horizontal: true,
          })}
          series={enrollmentChartData.series}
          type='bar'
          height={350}
        />
      </div>

      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>Enrollment Trends Over Time</h2>
        <Chart
          options={chartOptions({
            categories: enrollmentChartData.categories,
            type: 'line',
          })}
          series={enrollmentChartData.series}
          type='line'
          height={350}
        />
      </div>

      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>Top Programs by Enrollment</h2>
        <Chart
          options={chartOptions({
            categories: enrollmentChartData.categories,
            type: 'pie',
          })}
          series={enrollmentChartData.series[0].data}
          type='pie'
          height={350}
        />
      </div>

      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>
          Priority vs Non-Priority Enrollment
        </h2>
        <Chart
          options={chartOptions({
            categories: enrollmentChartData.categories,
            type: 'bar',
            stacked: false,
          })}
          series={enrollmentChartData.series}
          type='bar'
          height={350}
        />
      </div>

      <div className='mb-12'>
        <h2 className='text-md font-bold mb-4'>Enrollment Heatmap</h2>
        <Chart
          options={chartOptions({
            categories: enrollmentChartData.categories,
            type: 'heatmap',
          })}
          series={enrollmentChartData.series}
          type='heatmap'
          height={350}
        />
      </div>
    </div>
  );
}
