import Navigation from './components/Navigation';
import DashboardHeader from './components/DashboardHeader';
import CardWidget from './components/Widgets';
import Charts from './components/Charts';

function Dashboard() {
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
              <h2 className='text-2xl/2 font-semibold leading-7 text-gray-900'>
                Enrollment Statistics
              </h2>
            </div>
            <CardWidget />
          </div>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
