import Navigation from './components/Navigation';
import DashboardHeader from './components/DashboardHeader';
import CardWidget from './components/Widgets';
import Chart from 'react-apexcharts';
import {
  useChartData,
  useChartOptions,
  renderLicensureExamsData,
} from '../../hooks/dataHooks';

function Dashboard() {
  const chartData = useChartData();
  const chartOptions = useChartOptions();
  return (
    <div className='antialiased'>
      <DashboardHeader />
      <div>
        <Navigation />
      </div>

      <div className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8'>
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
            <Chart
              options={chartOptions.bar(
                chartData.branchOverview.categories,
                true
              )}
              series={chartData.branchOverview.series}
              type='bar'
              height={350}
            />
          </div>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8'>
            {chartData.programDrilldown.map((chart, index) => (
              <div key={index} className='mb-12'>
                <h2 className='text-md font-semibold mb-4'>
                  {chart.branchName} Campus
                </h2>
                <Chart
                  options={chartOptions.bar(chart.categories, false, true)}
                  series={chart.series}
                  type='bar'
                  height={350}
                />
              </div>
            ))}
          </div>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <h2>Licensure Exams Performance Statistics </h2>
            <Chart
              options={chartOptions.bar(
                chartData.licensureBranchPerformance.categories
              )}
              series={chartData.licensureBranchPerformance.series}
              type='bar'
              height={350}
            />

            <Chart
              options={chartOptions.bar(
                renderLicensureExamsData()[0].categories,
                false,
                false
              )}
              series={renderLicensureExamsData()[0].series}
              type='bar'
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
