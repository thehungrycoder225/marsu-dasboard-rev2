import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLoginForm } from '../../utils/validation'; // Utility for validation
import { saveLoginState, getLoginState } from '../../utils/storage'; // Utility for Remember Me

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Check if user is already remembered
  useEffect(() => {
    const savedUser = getLoginState();
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate form inputs
    const validationError = validateLoginForm(user);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    // Mock account to redirect to dashboard
    const mockAccount = {
      username: 'admin',
      password: 'marsu2025',
    };

    // Check if the username and password match the mock account
    if (
      user.username === mockAccount.username &&
      user.password === mockAccount.password
    ) {
      // Save login state if Remember Me is checked
      if (user.rememberMe) {
        saveLoginState(user);
      }
      // Redirect to the dashboard page
      navigate('/dashboard');
      console.log('Login successful!');
    } else {
      // Show an error message if the credentials are incorrect
      setError('Invalid username or password');
    }
    setLoading(false);
  };

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-25 w-auto'
            src='logo.png'
            alt='Marindque State University Logo'
          />
          <h2 className='mt-6 text-center text-xl font-bold leading-9 tracking-tight text-gray-900'>
            Marindque State University Executive Dashboard
          </h2>
        </div>

        <div className='mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]'>
          <div className='bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12'>
            <form
              className='space-y-6'
              onSubmit={handleSubmit}
              method='POST'
              action={'#'}
            >
              <div>
                <label
                  htmlFor='username'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Please enter your username
                </label>
                <div className='mt-1'>
                  <input
                    id='username'
                    name='username'
                    type='text'
                    autoComplete='username'
                    value={user.username}
                    onChange={handleChange}
                    required
                    className='block w-full rounded-sm border-0 py-1.5 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
                <div className='mt-2'>
                  {/* implement show password */}

                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    value={user.password}
                    onChange={handleChange}
                    required
                    className='block w-full rounded-sm border-0 py-1.5 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-offset-gray-50  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='rememberMe'
                    type='checkbox'
                    checked={user.rememberMe || false}
                    onChange={(e) =>
                      setUser({ ...user, rememberMe: e.target.checked })
                    }
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-3 block text-sm leading-6 text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                {/* <div className='text-sm leading-6'>
                  <a
                    href='/forgot-password'
                    className='font-semibold text-rose-900 hover:text-amber-500'
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-sm bg-rose-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600'
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>

              {error && (
                <div className='mt-4 text-sm text-red-600'>{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
