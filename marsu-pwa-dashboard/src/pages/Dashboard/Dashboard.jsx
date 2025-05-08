import React, { useState } from 'react';
import Navigation from './components/Navigation';
import DashboardHeader from './components/DashboardHeader';
import CardWidget from './components/Widgets';
import Chart from 'react-apexcharts';
import {
  useEnrollmentChartData,
  useLicensureExamData,
  useChartOptions,
} from '../../hooks/dataHooks';

function Dashboard() {
  const [filters, setFilters] = useState({
    year: new Date().getFullYear(),
    branch: null,
  });
  const [loading, setLoading] = useState(false);
  const chartData = useEnrollmentChartData(filters);
  const chartOptions = useChartOptions(chartData);

  const handleExport = (type) => {
    // const dataToExport = JSON.stringify(chartData, null, 2);
    // const blob = new Blob([dataToExport], { type: 'application/json' });
    // saveAs(blob, `dashboard-data.${type}`);
  };

  if (loading) {
    return <div className='text-center'>Loading...</div>;
  }

  if (!chartData) {
    return (
      <div className='text-center text-red-500'>
        No data available for the selected filters.
      </div>
    );
  }

  return (
    <div className='antialiased'>
      <DashboardHeader />
      <div>
        <Navigation />
      </div>

      <div className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='mb-4 flex justify-between'>
          {/* <div>
            <label className='mr-2'>Year:</label>
            <select
              value={filters.year}
              onChange={(e) =>
                setFilters({ ...filters, year: parseInt(e.target.value) })
              }
            >
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
            </select>

            <label className='ml-4 mr-2'>Branch:</label>
            <select
              value={filters.branch || ''}
              onChange={(e) =>
                setFilters({ ...filters, branch: e.target.value || null })
              }
            >
              <option value=''>All</option>
              <option value='Boac'>Boac</option>
              <option value='Gasan'>Gasan</option>
              <option value='Torrijos'>Torrijos</option>
              <option value='Sta. Cruz'>Sta. Cruz</option>
            </select>
          </div> */}

          {/* <div>
            <button
              className='bg-rose-900 hover:bg-rose-700 text-white px-4 py-2 rounded mr-2'
              onClick={() => handleExport('csv')}
            >
              Export CSV
            </button>
            <button
              className='bg-amber-600 hover:bg-amber text-white px-4 py-2 rounded'
              onClick={() => handleExport('json')}
            >
              Export JSON
            </button>
          </div> */}
        </div>

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl/2 font-bold leading-7'>
                Enrollment Statistics
              </h2>
            </div>
            <CardWidget />
          </div>

          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <h2 className='text-md font-bold mb-4'>Overview</h2>
            <div className='w-full'>
              <Chart
                options={chartOptions}
                series={chartData.series}
                type='bar'
                height={350}
              />
            </div>

            {/* Closing div for w-full */}
          </div>

          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8'></div>

          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <h2>Licensure Exams Performance Statistics</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
