import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import {
  EllipsisHorizontalIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';

import { Fragment } from 'react';
function CardWidget({ title, children }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const statuses = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
  };
  const enrollments = [
    {
      id: 1,
      branch: 'Boac',
      total: 7321,
      academicYear: '2023-2024',
      iconType: BuildingLibraryIcon,
    },
    {
      id: 2,
      branch: 'Gasan ',
      total: 393,
      academicYear: '2023-2024',
      iconType: BuildingOffice2Icon,
    },
    {
      id: 3,
      branch: 'Santa Cruz',
      total: 985,
      academicYear: '2023-2024',
      iconType: BuildingOfficeIcon,
    },
    {
      id: 4,
      branch: 'Torrijos',
      total: 369,
      academicYear: '2023-2024',
      iconType: HomeModernIcon,
    },
  ];
  return (
    <div className='bg-white p-4 mb-4'>
      <ul
        role='list'
        className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-4 xl:gap-x-8'
      >
        {enrollments.map((client) => (
          <li
            key={client.id}
            className='overflow-hidden rounded-xl border border-gray-200'
          >
            <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-4'>
              <client.iconType
                className=' w-4 flex-none rounded-md bg-white object-cover ring-1 ring-gray-900/10 '
                aria-hidden='true'
              />

              <div className='text-sm font-medium leading-6 text-gray-900'>
                {client.branch}
              </div>
              <Menu as='div' className='relative ml-auto'>
                <MenuButton className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>Open options</span>
                  <EllipsisHorizontalIcon
                    className='h-5 w-5'
                    aria-hidden='true'
                  />
                </MenuButton>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <MenuItems className='absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          View
                          <span className='sr-only'>, {client.name}</span>
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Edit
                          <span className='sr-only'>, {client.name}</span>
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
            <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>Academic Year</dt>
                <dd className='text-gray-700'>
                  {/* <time dateTime={client.lastInvoice.dateTime}>
                          {client.lastInvoice.date}
                        </time> */}
                  {client.academicYear}
                </dd>
              </div>
              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>Total</dt>
                <dd className='flex items-start gap-x-2'>
                  <div className='font-bold text-rose-800'>
                    {/* {client.lastInvoice.amount} */}
                    {client.total}
                  </div>
                  {/* <div
                    className={classNames(
                      'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                    )}
                  >
                    {client.branch}
                  </div> */}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardWidget;
