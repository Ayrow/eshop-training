import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  return (
    <div className='mt-5'>
      {user ? (
        <div>
          <h2 className='text-xl text-center'>Cart</h2>
        </div>
      ) : (
        <div className='text-center'>
          <p>You need an account to check your cart</p>
          <button
            onClick={() => navigate('/login')}
            className='mt-5 p-2 bg-orange-500 hover:bg-orange-400 border rounded-md'>
            Register
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
