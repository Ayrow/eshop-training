import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '../assets/email-icon.svg';
import PasswordIcon from '../assets/password-icon.svg';
import { loginUser } from '../features/user/userSlice';

// interface Props {
//   setIsMember: (isMember: boolean) => void;
// }

// const LoginForm: React.FC<Props> = ({ setIsMember }) => {
//   const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };

const LoginForm = ({ setIsMember }) => {
  const [values, setValues] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
      <div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
        Login To Your Account
      </div>
      <div className='mt-8'>
        <form onSubmit={(e) => handleSignin(e)} autoComplete='off'>
          <div className='flex flex-col mb-2'>
            <div className='flex relative '>
              <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                <img src={EmailIcon} alt='email icon' />
              </span>
              <input
                type='text'
                id='sign-in-email'
                className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Your email'
              />
            </div>
          </div>
          <div className='flex flex-col mb-6'>
            <div className='flex relative '>
              <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                <img src={PasswordIcon} alt='password icon' />
              </span>
              <input
                type='password'
                id='sign-in-email'
                className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Your password'
              />
            </div>
          </div>
          <div className='flex items-center mb-6 -mt-4'>
            <div className='flex ml-auto'>
              <p className='inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white'>
                Forgot Your Password?
              </p>
            </div>
          </div>
          <div className='flex w-full'>
            <button
              type='submit'
              className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <p className='inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white'>
          <button
            type='button'
            className='ml-2'
            onClick={() => setIsMember(false)}>
            You don&#x27;t have an account?
          </button>
        </p>
      </div>
    </div>
  );
};
export default LoginForm;
