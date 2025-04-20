import React from 'react';

function Dashboard() {
  return (
    <div className='antialiased bg-gray-50 dark:bg-gray-900'>
      <nav className='bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <button
              data-drawer-target='drawer-navigation'
              data-drawer-toggle='drawer-navigation'
              aria-controls='drawer-navigation'
              className='p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <svg
                aria-hidden='true'
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Toggle sidebar</span>
            </button>
            <a
              href='https://flowbite.com'
              className='flex items-center justify-between mr-4'
            >
              <img
                src='https://flowbite.s3.amazonaws.com/logo.svg'
                className='mr-3 h-8'
                alt='Flowbite Logo'
              />
              <span className='self-center text-sm font-semibold whitespace-nowrap dark:text-white'>
                Marinduque State Univeristy
              </span>
            </a>
            <form action='#' method='GET' className='hidden md:block md:pl-2'>
              <label htmlFor='topbar-search' className='sr-only'>
                Search
              </label>
              <div className='relative md:w-96'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    ></path>
                  </svg>
                </div>
                <input
                  type='text'
                  name='email'
                  id='topbar-search'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Search'
                />
              </div>
            </form>
          </div>
          <div className='flex items-center lg:order-2'>
            <button
              type='button'
              data-drawer-toggle='drawer-navigation'
              aria-controls='drawer-navigation'
              className='p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
            >
              <span className='sr-only'>Toggle search</span>
              <svg
                aria-hidden='true'
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                ></path>
              </svg>
            </button>
            <button
              type='button'
              data-dropdown-toggle='notification-dropdown'
              className='p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
            >
              <span className='sr-only'>View notifications</span>
              <svg
                aria-hidden='true'
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z'></path>
              </svg>
            </button>
            <div
              className='hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl'
              id='notification-dropdown'
            >
              <div className='block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300'>
                Notifications
              </div>
              <div>
                <a
                  href='#'
                  className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'
                >
                  <div className='flex-shrink-0'>
                    <img
                      className='w-11 h-11 rounded-full'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
                      alt='Bonnie Green avatar'
                    />
                    <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700'>
                      <svg
                        aria-hidden='true'
                        className='w-3 h-3 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                        <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pl-3 w-full'>
                    <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                      New message from
                      <span className='font-semibold text-gray-900 dark:text-white'>
                        Bonnie Green
                      </span>
                      : "Hey, what's up? All set for the presentation?"
                    </div>
                    <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a
                  href='#'
                  className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'
                >
                  <div className='flex-shrink-0'>
                    <img
                      className='w-11 h-11 rounded-full'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
                      alt='Jese Leos avatar'
                    />
                    <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700'>
                      <svg
                        aria-hidden='true'
                        className='w-3 h-3 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z'></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pl-3 w-full'>
                    <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                      <span className='font-semibold text-gray-900 dark:text-white'>
                        Jese leos
                      </span>
                      and
                      <span className='font-medium text-gray-900 dark:text-white'>
                        5 others
                      </span>
                      started following you.
                    </div>
                    <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                      10 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href='#'
                  className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'
                >
                  <div className='flex-shrink-0'>
                    <img
                      className='w-11 h-11 rounded-full'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
                      alt='Joseph McFall avatar'
                    />
                    <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700'>
                      <svg
                        aria-hidden='true'
                        className='w-3 h-3 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pl-3 w-full'>
                    <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                      <span className='font-semibold text-gray-900 dark:text-white'>
                        Joseph Mcfall
                      </span>
                      and
                      <span className='font-medium text-gray-900 dark:text-white'>
                        141 others
                      </span>
                      love your story. See it and view more stories.
                    </div>
                    <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                      44 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href='#'
                  className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'
                >
                  <div className='flex-shrink-0'>
                    <img
                      className='w-11 h-11 rounded-full'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
                      alt='Roberta Casas image'
                    />
                    <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700'>
                      <svg
                        aria-hidden='true'
                        className='w-3 h-3 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pl-3 w-full'>
                    <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                      <span className='font-semibold text-gray-900 dark:text-white'>
                        Leslie Livingston
                      </span>
                      mentioned you in a comment:
                      <span className='font-medium text-primary-600 dark:text-primary-500'>
                        @bonnie.green
                      </span>
                      what do you say?
                    </div>
                    <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                      1 hour ago
                    </div>
                  </div>
                </a>
                <a
                  href='#'
                  className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600'
                >
                  <div className='flex-shrink-0'>
                    <img
                      className='w-11 h-11 rounded-full'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png'
                      alt='Robert image'
                    />
                    <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700'>
                      <svg
                        aria-hidden='true'
                        className='w-3 h-3 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
                      </svg>
                    </div>
                  </div>
                  <div className='pl-3 w-full'>
                    <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                      <span className='font-semibold text-gray-900 dark:text-white'>
                        Robert Brown
                      </span>
                      posted a new video: Glassmorphism - learn how to implement
                      the new design trend.
                    </div>
                    <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                      3 hours ago
                    </div>
                  </div>
                </a>
              </div>
              <a
                href='#'
                className='block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline'
              >
                <div className='inline-flex items-center'>
                  <svg
                    aria-hidden='true'
                    className='mr-2 w-4 h-4 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10 12a2 2 0 100-4 2 2 0 000 4z'></path>
                    <path
                      fillRule='evenodd'
                      d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  View all
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <aside
        className='fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
        aria-label='Sidenav'
        id='drawer-navigation'
      >
        <div className='overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800'>
          <form action='#' method='GET' className='md:hidden mb-2'>
            <label htmlFor='sidebar-search' className='sr-only'>
              Search
            </label>
            <div className='relative'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                name='search'
                id='sidebar-search'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Search'
              />
            </div>
          </form>
          <ul className='space-y-2'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                </svg>
                <span className='ml-3'>Overview</span>
              </a>
            </li>
          </ul>
          <ul className='pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
                  <path
                    fillRule='evenodd'
                    d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='ml-3'>Docs</span>
              </a>
            </li>

            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='ml-3'>Help</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20'>
          <a
            href='#'
            className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
          >
            <svg
              aria-hidden='true'
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
            </svg>
          </a>
          <a
            href='#'
            data-tooltip-target='tooltip-settings'
            className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600'
          >
            <svg
              aria-hidden='true'
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
          <div
            id='tooltip-settings'
            role='tooltip'
            className='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip'
          >
            Settings page
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
          <div
            className='hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700'
            id='language-dropdown'
          >
            <ul className='py-1' role='none'>
              <li>
                <a
                  href='#'
                  className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600'
                  role='menuitem'
                >
                  <div className='inline-flex items-center'>
                    <svg
                      aria-hidden='true'
                      className='h-3.5 w-3.5 rounded-full mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      id='flag-icon-css-us'
                      viewBox='0 0 512 512'
                    >
                      <g fillRule='evenodd'>
                        <g strokeWidth='1pt'>
                          <path
                            fill='#bd3d44'
                            d='M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                            transform='scale(3.9385)'
                          />
                          <path
                            fill='#fff'
                            d='M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                            transform='scale(3.9385)'
                          />
                        </g>
                        <path
                          fill='#192f5d'
                          d='M0 0h98.8v70H0z'
                          transform='scale(3.9385)'
                        />
                        <path
                          fill='#fff'
                          d='M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z'
                          transform='scale(3.9385)'
                        />
                      </g>
                    </svg>
                    English (US)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600'
                  role='menuitem'
                >
                  <div className='inline-flex items-center'>
                    <svg
                      aria-hidden='true'
                      className='h-3.5 w-3.5 rounded-full mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      id='flag-icon-css-de'
                      viewBox='0 0 512 512'
                    >
                      <path fill='#ffce00' d='M0 341.3h512V512H0z' />
                      <path d='M0 0h512v170.7H0z' />
                      <path fill='#d00' d='M0 170.7h512v170.6H0z' />
                    </svg>
                    Deutsch
                  </div>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600'
                  role='menuitem'
                >
                  <div className='inline-flex items-center'>
                    <svg
                      aria-hidden='true'
                      className='h-3.5 w-3.5 rounded-full mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      id='flag-icon-css-it'
                      viewBox='0 0 512 512'
                    >
                      <g fillRule='evenodd' strokeWidth='1pt'>
                        <path fill='#fff' d='M0 0h512v512H0z' />
                        <path fill='#009246' d='M0 0h170.7v512H0z' />
                        <path fill='#ce2b37' d='M341.3 0H512v512H341.3z' />
                      </g>
                    </svg>
                    Italiano
                  </div>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600'
                  role='menuitem'
                >
                  <div className='inline-flex items-center'>
                    <svg
                      aria-hidden='true'
                      className='h-3.5 w-3.5 rounded-full mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      id='flag-icon-css-cn'
                      viewBox='0 0 512 512'
                    >
                      <defs>
                        <path
                          id='a'
                          fill='#ffde00'
                          d='M1-.3L-.7.8 0-1 .6.8-1-.3z'
                        />
                      </defs>
                      <path fill='#de2910' d='M0 0h512v512H0z' />
                      <use
                        width='30'
                        height='20'
                        transform='matrix(76.8 0 0 76.8 128 128)'
                        xlinkHref='#a'
                      />
                      <use
                        width='30'
                        height='20'
                        transform='rotate(-121 142.6 -47) scale(25.5827)'
                        xlinkHref='#a'
                      />
                      <use
                        width='30'
                        height='20'
                        transform='rotate(-98.1 198 -82) scale(25.6)'
                        xlinkHref='#a'
                      />
                      <use
                        width='30'
                        height='20'
                        transform='rotate(-74 272.4 -114) scale(25.6137)'
                        xlinkHref='#a'
                      />
                      <use
                        width='30'
                        height='20'
                        transform='matrix(16 -19.968 19.968 16 256 230.4)'
                        xlinkHref='#a'
                      />
                    </svg>
                    中文 (繁體)
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <main className='p-4 md:ml-64 h-auto pt-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
          <div className='border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64'></div>
        </div>
        <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4'></div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72'></div>
        </div>
        <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4'></div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72'></div>
          <div className='border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72'></div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
