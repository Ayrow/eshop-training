import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import {
  removeUserFromLocalStorage,
  clearUser,
} from '../features/user/userSlice';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(clearUser());
    removeUserFromLocalStorage();
    navigate('/');
  };

  return (
    <div className=' py-2 px-5 flex justify-between items-center bg-black'>
      <Link to='/'>
        <img src={Logo} className='w-20' alt='logo' />
      </Link>
      <div>
        <div className='flex items-center gap-5'>
          <Link to='/products'>Products</Link>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
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
