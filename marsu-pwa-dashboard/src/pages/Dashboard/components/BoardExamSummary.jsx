import { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import PropTypes from 'prop-types';

const BoardExamSummary = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const {
    summary,
    program_rankings: programRankings,
    campus_performance: campusPerformance,
  } = data;

  const sortedProgramRankings = [...programRankings].sort(
    (a, b) => b['Passing Rate'] - a['Passing Rate']
  );

  const latestYear = Math.max(...programRankings.map((item) => item.Year));
  const latestCampusPerformance = campusPerformance.filter(
    (item) => item.Year === latestYear
  );

  const paginatedPrograms = sortedProgramRankings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + direction;
      if (
        newPage < 1 ||
        newPage > Math.ceil(sortedProgramRankings.length / itemsPerPage)
      ) {
        return prevPage;
      }
      return newPage;
    });
  };

  const renderCardHeader = (title) => (
    <div className='flex items-center gap-x-4 border-b border-gray-200 bg-gray-50 p-4'>
      <div className='text-sm font-medium text-gray-900'>{title}</div>
    </div>
  );

  const renderSnapshotItem = (label, value) => (
    <div className='flex justify-between gap-x-4 py-3'>
      <dt className='text-gray-500'>{label}</dt>
      <dd className='text-gray-700'>{value}</dd>
    </div>
  );

  return (
    <div className='bg-white p-4 mb-4'>
      <h2 className='text-lg font-semibold text-gray-900 mb-6'>
        Board Exam Performance Summary
      </h2>

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
        {/* Snapshot */}
        <div className='rounded-lg border border-gray-200'>
          {renderCardHeader(`${latestYear} Snapshot`)}
          <dl className='divide-y divide-gray-100 px-6 py-4 text-sm'>
            {renderSnapshotItem(
              'Total Takers',
              latestCampusPerformance.reduce(
                (sum, item) => sum + item['Number of 1st Time Takers'],
                0
              )
            )}
            {renderSnapshotItem(
              'Avg Passing Rate',
              (
                latestCampusPerformance.reduce(
                  (sum, item) => sum + item['Number of 1st Time Passers'],
                  0
                ) /
                latestCampusPerformance.reduce(
                  (sum, item) => sum + item['Number of 1st Time Takers'],
                  0
                )
              ).toFixed(1) *
                100 +
                '%'
            )}
            {/* Top 1 Performing Program */}
          </dl>
        </div>
        {/* Year-over-year Passing Rate */}

        {/* Passers vs. Takers Proportion */}
        <div className='rounded-lg border border-gray-200'>
          {renderCardHeader('Passers vs. Takers Proportion')}
          <div className='p-4'>
            <ApexCharts
              options={{
                chart: { type: 'donut' },
                labels: ['Passers', 'Takers'],
                colors: ['#660033', '#F59E0B'],
                tooltip: {
                  y: {
                    formatter: (val) => `${val.toFixed(2)}`,
                  },
                },
                toolbar: { show: false },
              }}
              series={[
                campusPerformance.reduce(
                  (sum, item) => sum + item['Number of 1st Time Passers'],
                  0
                ),
                campusPerformance.reduce(
                  (sum, item) => sum + item['Number of 1st Time Takers'],
                  0
                ),
              ]}
              type='donut'
              height={160}
            />
          </div>
        </div>

        <div className='rounded-lg border border-gray-200'>
          {renderCardHeader('Year-over-year Passing Rate')}
          <div className='p-4'>
            <ApexCharts
              options={{
                chart: { type: 'line', toolbar: { show: false } },
                stroke: { curve: 'smooth', width: 2 },
                xaxis: {
                  categories: summary.map((item) => item.Year),
                  title: { text: 'Year' },
                },
                yaxis: {
                  labels: {
                    formatter: (val) => `${val.toFixed(2)}%`,
                  },
                  title: { text: 'Passing Rate (%)' },
                },
                colors: ['#660033'],
              }}
              series={[
                {
                  name: 'Passing Rate',
                  data: summary.map((item) =>
                    (item['Passing Rate'] * 100).toFixed(2)
                  ),
                },
              ]}
              type='line'
              height={160}
            />
          </div>
        </div>

        {/* Top Programs by Passing Rate */}
      </div>
      <div className='mt-6'>
        <div className='rounded-lg border border-gray-200'>
          {renderCardHeader('Top Programs by Passing Rate')}
          <div className='p-4'>
            <table className='min-w-full divide-y divide-gray-200'>
              <tbody>
                {paginatedPrograms.map((program) => (
                  <tr
                    key={program.Year + program.Program}
                    className='hover:bg-gray-50'
                  >
                    <td className='px-6 py-4 text-sm text-gray-500'>
                      {program.Program}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-900'>
                      {(program['Passing Rate'] * 100).toFixed(2)}%
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
                  currentPage * itemsPerPage >= sortedProgramRankings.length
                }
                className='text-sm text-gray-500 hover:text-gray-700'
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BoardExamSummary.propTypes = {
  data: PropTypes.shape({
    summary: PropTypes.arrayOf(
      PropTypes.shape({
        Year: PropTypes.number.isRequired,
        'Passing Rate': PropTypes.number.isRequired,
      })
    ).isRequired,
    program_rankings: PropTypes.arrayOf(
      PropTypes.shape({
        Year: PropTypes.number.isRequired,
        Program: PropTypes.string.isRequired,
        'Passing Rate': PropTypes.number.isRequired,
      })
    ).isRequired,
    campus_performance: PropTypes.arrayOf(
      PropTypes.shape({
        Year: PropTypes.number.isRequired,
        Campus: PropTypes.string.isRequired,
        'Number of 1st Time Takers': PropTypes.number.isRequired,
        'Number of 1st Time Passers': PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default BoardExamSummary;
