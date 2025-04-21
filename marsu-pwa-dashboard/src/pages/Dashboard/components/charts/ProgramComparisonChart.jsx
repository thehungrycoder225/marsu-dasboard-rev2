import React from 'react';
import Chart from 'react-apexcharts';

const ProgramComparisonChart = ({ data }) => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories: data.map((d) => d.program),
    },
    fill: {
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
    },
  };

  return (
    <div className='mb-12'>
      <h2 className='text-md font-bold mb-4'>
        Program Comparison Across Branches
      </h2>
      <Chart
        options={options}
        series={data.map((d) => ({
          name: d.program,
          data: d.branches,
        }))}
        type='bar'
        height={350}
      />
    </div>
  );
};

export default ProgramComparisonChart;
