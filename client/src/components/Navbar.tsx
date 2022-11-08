import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className=' py-2 px-5 flex justify-between items-center bg-black'>
      <div>
        <img src={Logo} className='w-20' alt='logo' />
      </div>
      <div>
        <div className='flex items-center gap-5'>
          <p>Login / Register</p>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
