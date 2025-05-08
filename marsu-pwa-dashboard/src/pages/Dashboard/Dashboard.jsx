import React, { useState, useEffect, useMemo } from 'react';
import Navigation from './components/Navigation';
import DashboardHeader from './components/DashboardHeader';
import CardWidget from './components/Widgets';
import SummarySection from './components/Summary';
import Chart from 'react-apexcharts';

function Dashboard() {
  const [filters, setFilters] = useState({
    year: new Date().getFullYear(),
    branch: null,
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/enrollments_processed.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  console.log('Data fetched:', data);
  // const getBubbleData = useMemo(() => {
  //   if (!data) return [];
  //   const entry = data.find((d) => d.year === filters.year);
  //   if (!entry) return [];

  //   return entry.programs.map((program) => ({
  //     x: program.enrollment,
  //     y: program.growth_rate ? Math.round(program.growth_rate * 100) : 0,
  //     z: program.rank,
  //     name: program.name.replace('Bachelor of Science in ', ''),
  //     category: program.category,
  //   }));
  // }, [data, filters.year]);

  // const handleExport = (type) => {
  //   if (!data) return;
  //   const dataToExport = JSON.stringify(data, null, 2);
  //   const blob = new Blob([dataToExport], { type: `application/${type}` });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = `dashboard-data.${type}`;
  //   link.click();
  //   URL.revokeObjectURL(url);
  // };

  if (loading) {
    return <div className='text-center'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center text-red-500'>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
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

          <div>
            {/* <button
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
            </button> */}
          </div>
        </div>

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl/2 font-bold leading-7'>
                University Enrollment Statistics
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='w-full'>
              <div className='summary-cards'>
                <div className='summary-card'>
                  <SummarySection data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
