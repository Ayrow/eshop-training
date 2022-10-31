import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className=' p-5 flex justify-between bg-black'>
      <div> Logo </div>
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
