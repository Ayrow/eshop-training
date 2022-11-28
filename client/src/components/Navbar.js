import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className=' py-2 px-5 flex justify-between items-center bg-black'>
      <Link to='/'>
        <img src={Logo} className='w-20' alt='logo' />
      </Link>
      <div>
        <div className='flex items-center gap-5'>
          <Link to='/products'>Products</Link>
          {user ? (
            <button>Logout</button>
          ) : (
            <Link to='/login'>Login / Register</Link>
          )}

          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
