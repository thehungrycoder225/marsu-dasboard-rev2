import { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import PropTypes from 'prop-types';

const ResearchSummary = ({ data, filteredData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { summary } = data;
  const latestYear = Math.max(
    ...Object.keys(summary.by_year || {}).map(Number)
  );

  const currentYearStats = {
    total: filteredData.length,
    avg_duration:
      filteredData.reduce((sum, item) => sum + (item.duration_days || 0), 0) /
      filteredData.length,
    collaboration:
      filteredData.filter((item) => item.researcher_count > 1).length /
      filteredData.length,
  };

  const paginatedResearchers = Object.entries(
    summary.top_researchers || {}
  ).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + direction;
      if (
        newPage < 1 ||
        newPage >
          Math.ceil(
            Object.entries(summary.top_researchers || {}).length / itemsPerPage
          )
      ) {
        return prevPage;
      }
      return newPage;
    });
  };

  return (
    <div className='bg-white p-4 mb-4'>
      <h2 className='text-lg font-semibold leading-6 text-gray-900'>
        Research Performance Summary
      </h2>

      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8'>
        <div className='overflow-hidden rounded-xl border border-gray-200'>
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
            <div className='text-sm font-medium leading-6 text-gray-900'>
              {latestYear} Snapshot
            </div>
          </div>
          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <dt className='text-gray-500'>Total Projects</dt>
              <dd className='text-gray-700'>{summary.total_research}</dd>
            </div>
            <div className='flex justify-between gap-x-4 py-3'>
              <dt className='text-gray-500'>Avg Duration</dt>
              <dd className='text-gray-700'>
                {Math.round(summary.avg_duration)} days
              </dd>
            </div>
            <div className='flex justify-between gap-x-4 py-3'>
              <dt className='text-gray-500'>Avg Researchers</dt>
              <dd className='text-gray-700'>
                {summary.avg_researchers.toFixed(1)}%
              </dd>
            </div>
          </dl>
        </div>

        <div className='overflow-hidden rounded-xl border border-gray-200'>
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
            <div className='text-sm font-medium leading-6 text-gray-900'>
              Publication Venues as of ({latestYear})
            </div>
          </div>
          <div className='p-4'>
            <ApexCharts
              options={{
                chart: { type: 'donut' },
                labels: Object.keys(summary.by_forum_type || {}),
                colors: ['#7D0A0A', '#BF3131', '#EAD196'],
              }}
              series={Object.values(summary.by_forum_type || {})}
              type='donut'
              height={160}
            />
          </div>
        </div>

        <div className='overflow-hidden rounded-xl border border-gray-200'>
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
            <div className='text-sm font-medium leading-6 text-gray-900'>
              Year-over-year Trend
            </div>
          </div>
          <div className='p-4'>
            <ApexCharts
              options={{
                chart: { sparkline: { enabled: true } },
                stroke: { curve: 'smooth', width: 2 },
                colors: ['#660033'],
                tooltip: { enabled: false },
              }}
              series={[
                {
                  name: 'Projects',
                  data: Object.values(summary.by_year || {}),
                },
              ]}
              type='line'
              height={100}
            />
            <div className='mt-2 flex justify-between text-xs text-gray-500'>
              {Object.keys(summary.by_year || {}).map((year) => (
                <span key={year}>{year}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8'>
        <div className='overflow-hidden rounded-xl border border-gray-200'>
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
            <div className='text-sm font-medium leading-6 text-gray-900'>
              Most Active Researchers ({latestYear})
            </div>
          </div>
          <div className='p-4'>
            <table className='min-w-full divide-y divide-gray-200'>
              <tbody>
                {paginatedResearchers.map(([name, count]) => (
                  <tr key={name} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 text-sm text-gray-500'>{name}</td>
                    <td className='px-6 py-4 text-sm text-gray-900'>
                      {count} projects
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='mt-4 flex justify-between'>
              <button
                onClick={() => handlePageChange(-1)}
                disabled={currentPage === 1}
                className='text-sm text-gray-500 hover:text-gray-700'
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(1)}
                disabled={
                  currentPage * itemsPerPage >=
                  Object.entries(summary.top_researchers || {}).length
                }
                className='text-sm text-gray-500 hover:text-gray-700'
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className='overflow-hidden rounded-xl border border-gray-200'>
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
            <div className='text-sm font-medium leading-6 text-gray-900'>
              Common Research Themes ({latestYear})
            </div>
          </div>
          <div className='p-4'>
            <table className='min-w-full divide-y divide-gray-200'>
              <tbody>
                {Object.entries(summary.by_research_type || {}).map(
                  ([topic, count]) => (
                    <tr key={topic} className='hover:bg-gray-50'>
                      <td className='px-6 py-4 text-sm text-gray-500'>
                        {topic.charAt(0).toUpperCase() + topic.slice(1)}
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-900'>
                        {count}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ResearchSummary.propTypes = {
  data: PropTypes.shape({
    summary: PropTypes.shape({
      by_year: PropTypes.object,
      by_forum_type: PropTypes.object,
      by_research_type: PropTypes.object,
      top_researchers: PropTypes.object,
    }),
  }).isRequired,
  filteredData: PropTypes.arrayOf(
    PropTypes.shape({
      duration_days: PropTypes.number,
      researcher_count: PropTypes.number,
    })
  ).isRequired,
};

export default ResearchSummary;
