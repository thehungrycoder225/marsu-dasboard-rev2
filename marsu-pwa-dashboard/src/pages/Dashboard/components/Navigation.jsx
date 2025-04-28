import { NavLink } from 'react-router-dom';
import {
  BuildingOfficeIcon,
  UsersIcon,
  ChartPieIcon,
} from '@heroicons/react/20/solid';

const tabs = [
  { name: 'Overview', href: '/dashboard', icon: ChartPieIcon },
  { name: 'Academics', href: '/academics', icon: BuildingOfficeIcon },
  { name: 'Researches', href: '/researches', icon: UsersIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  return (
    <div>
      <div className='md:flex md:items-center md:justify-between bg-white border-b border-gray-200 px-8 w-full'>
        <div className='sm:hidden bg-white border-b border-gray-200 px-4 py-2.5 w-full'>
          <label htmlFor='tabs' className='sr-only'>
            Select a tab
          </label>
          <select
            id='tabs'
            name='tabs'
            className='block w-full rounded-md border-gray-300 focus:border-rose-800 focus:ring-rose-800'
            onChange={(e) => {
              window.location.href = e.target.value;
            }}
            defaultValue={window.location.pathname}
          >
            {tabs.map((tab) => (
              <option key={tab.name} value={tab.href}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className='hidden sm:block'>
          <div className='border-b border-gray-200'>
            <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
              {tabs.map((tab) => (
                <NavLink
                  key={tab.name}
                  to={tab.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'border-rose-800 text-rose-600'
                        : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700',
                      'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
                    )
                  }
                >
                  <tab.icon
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'text-rose-800'
                          : 'text-gray-400 group-hover:text-gray-500',
                        '-ml-0.5 mr-2 h-5 w-5'
                      )
                    }
                    aria-hidden='true'
                  />
                  <span>{tab.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
