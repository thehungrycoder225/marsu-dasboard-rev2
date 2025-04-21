import React from 'react';
import Chart from 'react-apexcharts';

const ProgramPassingRatesChart = ({ branchData }) => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories: branchData.data.map((d) => d.name),
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <div className='mb-12'>
      <h2 className='text-md font-bold mb-4'>
        Program Passing Rates - {branchData.branch}
      </h2>
      <Chart
        options={options}
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
  );
};

export default ProgramPassingRatesChart;
