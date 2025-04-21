import React from 'react';
import Chart from 'react-apexcharts';

const BranchPerformanceChart = ({ data }) => {
  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350,
    },
    xaxis: {
      categories: data.categories,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    fill: {
      colors: ['#660033', '#FFCC00'],
    },
  };

  return (
    <div className='mb-12'>
      <h2 className='text-md font-bold mb-4'>
        Branch-Level Performance Overview
      </h2>
      <Chart options={options} series={data.series} type='bar' height={350} />
    </div>
  );
};

export default BranchPerformanceChart;
