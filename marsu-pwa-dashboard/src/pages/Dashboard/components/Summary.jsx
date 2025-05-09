import Chart from 'react-apexcharts';

const SummarySection = ({ data }) => {
  if (!data?.summary) return null;

  const latestYear = Math.max(...data.summary.map((s) => s.year));
  const summary = data.summary.find((s) => s.year === latestYear);
  const trends = data.summary;

  return (
    <div className='bg-white p-4 mb-4 rounded-xl  '>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8'>
        {/* Current Year Summary */}
        <div className='overflow-hidden rounded-xl border border-gray-200'>
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
            <h3 className='text-sm font-medium leading-6 text-gray-900'>
              {latestYear} Overview
            </h3>
          </div>
          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <dt className='text-gray-500'>Total Students:</dt>
              <dd className='font-bold text-rose-800'>
                {summary.total_enrollment.toLocaleString()}
              </dd>
            </div>
            <div className='flex justify-between gap-x-4 py-3'>
              <dt className='text-gray-500'>YoY Growth:</dt>
              <dd
                className={`font-bold ${
                  summary.yoy_growth >= 0 ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {summary.yoy_growth
                  ? `${(summary.yoy_growth * 100).toFixed(1)}%`
                  : 'N/A'}
              </dd>
            </div>
          </dl>
        </div>

        {/* Top Campuses */}
        <div className='overflow-hidden rounded-xl border border-gray-200'>
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
            <h3 className='text-sm font-medium leading-6 text-gray-900'>
              Top Campuses ({latestYear})
            </h3>
          </div>
          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            {Object.entries(summary.top_campuses).map(
              ([campus, enrollment]) => (
                <div key={campus} className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500'>{campus}:</dt>
                  <dd className='font-bold text-rose-800'>
                    {enrollment.toLocaleString()}
                  </dd>
                </div>
              )
            )}
          </dl>
        </div>

        {/* Trend Sparklines */}
        <div className='overflow-hidden rounded-xl border border-gray-200'>
          <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
            <h3 className='text-sm font-medium leading-6 text-gray-900'>
              Year-over-Year Trend
            </h3>
          </div>
          <div className='px-6 py-4'>
            <Chart
              options={{
                chart: { sparkline: { enabled: true } },
                stroke: { curve: 'smooth', width: 3 },
                colors: ['#660033'],
                tooltip: { enabled: false },
              }}
              series={[
                {
                  name: 'Enrollment',
                  data: trends.map((t) => t.total_enrollment),
                },
              ]}
              type='line'
              height={100}
            />
            <div className='mt-2 flex justify-between text-xs text-gray-500'>
              {trends.map((t) => (
                <span key={t.year}>{t.year}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Trend Table */}
      <div className='mt-6 overflow-hidden rounded-xl border border-gray-200'>
        <table className='min-w-full divide-y divide-gray-300 text-sm'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3.5 px-3 text-left font-semibold text-gray-900'>
                Year
              </th>
              <th className='py-3.5 px-3 text-left font-semibold text-gray-900'>
                Total Enrollment
              </th>
              <th className='py-3.5 px-3 text-left font-semibold text-gray-900'>
                YoY Growth
              </th>
              <th className='py-3.5 px-3 text-left font-semibold text-gray-900'>
                Top Program
              </th>
              <th className='py-3.5 px-3 text-left font-semibold text-gray-900'>
                Program Enrollment
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {trends.map((stat) => (
              <tr key={stat.year}>
                <td className='whitespace-nowrap py-4 px-3 text-gray-500'>
                  {stat.year}
                </td>
                <td className='whitespace-nowrap py-4 px-3 font-bold text-rose-800'>
                  {stat.total_enrollment.toLocaleString()}
                </td>
                <td
                  className={`whitespace-nowrap py-4 px-3 font-bold ${
                    stat.yoy_growth >= 0 ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {stat.yoy_growth
                    ? `${(stat.yoy_growth * 100).toFixed(1)}%`
                    : 'N/A'}
                </td>
                <td className='whitespace-nowrap py-4 px-3 text-gray-500'>
                  {stat.top_programs[0].Program.split(
                    'Bachelor of Science in '
                  ).pop()}
                </td>
                <td className='whitespace-nowrap py-4 px-3 font-bold text-rose-800'>
                  {stat.top_programs[0].Enrollment.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummarySection;
