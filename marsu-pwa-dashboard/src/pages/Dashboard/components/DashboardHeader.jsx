export default function Header() {
  const handleLogout = () => {
    // Clear login state from local storage
    localStorage.removeItem('loginState');
    // Redirect to the login page
    window.location.href = '/';
  };

  return (
    <div className='md:flex md:items-center md:justify-between bg-rose-900 border-b border-gray-200 px-4 py-2.5  w-full'>
      <div className='min-w-0 '>
        <img
          src='logo.png'
          alt='Marinduque State University Logo'
          className='mr-3 h-8'
        />
      </div>
      <div className='min-w-0 flex-1'>
        <h2 className='self-center text-md font-bold whitespace-nowrap text-white'>
          Marinduque State University
        </h2>
      </div>
      <div className='mt-4 flex md:ml-4 md:mt-0'>
        <button
          type='button'
          onClick={handleLogout}
          className='ml-3 inline-flex items-center rounded-md bg-transparent  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-amber-500 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
        >
          Logout
        </button>
      </div>
    </div>
  );
}
