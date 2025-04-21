import React from 'react';
import Chart from 'react-apexcharts';

const EfficiencySnapshotChart = ({ data }) => {
  const options = {
    chart: {
      type: 'donut',
      height: 350,
    },
  };

  return (
    <div className='mb-12'>
      <h2 className='text-md font-bold mb-4'>Efficiency Snapshot</h2>
      <Chart
        options={options}
        series={data.map((d) => parseFloat(d.passingRate))}
        type='donut'
        height={350}
      />
    </div>
  );
};

export default EfficiencySnapshotChart;
