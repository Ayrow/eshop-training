import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [isMember, setIsMember] = useState(true);

  return (
    <div className='mt-10'>
      <div className='flex justify-center'>
        {isMember ? (
          <LoginForm setIsMember={setIsMember} />
        ) : (
          <RegisterForm setIsMember={setIsMember} />
        )}
      </div>
    </div>
  );
};
export default Login;
