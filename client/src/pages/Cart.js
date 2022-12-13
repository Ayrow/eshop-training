import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  emptyCart,
  getProductsFromCart,
  removeProductFromCart,
} from '../features/cart/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { cartProducts } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getProductsFromCart('product'));
  }, [cartProducts]);

  return (
    <div className='mt-5'>
      {user ? (
        <div>
          <h2 className='text-xl text-center'>Cart</h2>
          <div>
            <div>
              {cartProducts.length > 0 ? (
                <div className='my-5 gap-5'>
                  <div className='font-bold grid grid-cols-4 gap-5 text-center'>
                    <p>Product</p>
                    <p>Unit Price</p>
                    <p>Quantity</p>
                    <p>Total Price</p>
                  </div>
                  {cartProducts.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className='mx-5 p-3 border grid grid-cols-4 gap-5 text-center'>
                        <h4 className='flex justify-center items-center'>
                          {item.title}
                        </h4>
                        <p className='flex justify-center items-center'>
                          {item.price} €
                        </p>
                        <div className='flex gap-5 justify-center items-center'>
                          <p>-</p>
                          <p>{item.quantity}</p>
                          <p>+</p>
                        </div>
                        <div className='flex gap-5 justify-center items-center'>
                          <p>120 €</p>
                          <button
                            className='bg-red-500 rounded px-3 py-1'
                            onClick={() =>
                              dispatch(removeProductFromCart(item.id))
                            }>
                            remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <button
                    className='mt-5 p-2 ml-5 bg-orange-500 hover:bg-orange-400 border rounded-md'
                    onClick={() => dispatch(emptyCart())}>
                    Empty cart
                  </button>
                </div>
              ) : (
                <div>
                  <h4>Your cart is empty</h4>
                  <button
                    className='mt-5 p-2 bg-orange-500 hover:bg-orange-400 border rounded-md'
                    onClick={() => navigate('/products')}>
                    Go shopping
                  </button>
                </div>
              )}
            </div>
          </div>
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
