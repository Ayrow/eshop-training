import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/user/userSlice';
import EmailIcon from '../assets/email-icon.svg';
import PasswordIcon from '../assets/password-icon.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// interface Props {
//   setIsMember: (isMember: boolean) => void;
// }

const RegisterForm = ({ setIsMember }) => {
  const [values, setValues] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  const handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    setValues({ ...values, [target.name]: target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(registerUser({ email, password }));
    console.log(user);
    // navigate('/');
  };

  return (
    <div className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
      <div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
        Register a new account
      </div>
      <div className='mt-8'>
        <form onSubmit={(e) => handleRegister(e)} autoComplete='off'>
          <div className='flex flex-col mb-2'>
            <div className='flex relative '>
              <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                <img src={EmailIcon} alt='email icon' />
              </span>
              <input
                type='text'
                className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Your email'
                required
                name='email'
                onChange={handleChange}
                value={values.email}
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
                className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Your password'
                name='password'
                required
                onChange={handleChange}
                value={values.password}
              />
            </div>
          </div>
          <div className='flex w-full'>
            <button
              type='submit'
              className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
              Register
            </button>
          </div>
        </form>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <p className='inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white'>
          <button
            type='button'
            className='ml-2'
            onClick={() => setIsMember(true)}>
            Already have an account?
          </button>
        </p>
      </div>
    </div>
  );
};
export default RegisterForm;
