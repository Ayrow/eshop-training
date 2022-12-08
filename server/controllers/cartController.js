import User from '../models/User.js';
import Product from '../models/Product.js';

const getProductsFromCart = async (req, res) => {
  const id = req.user.userId;

  const user = await User.findOne({ _id: id });
  const userCart = user.cart;
  const productsInCart = await Product.find({ _id: userCart });

  console.log('userCart', { productsInCart, user });

  res.status(200).json({ msg: 'get all products from cart' });
};

const addToCart = (req, res) => {
  console.log('req', req);
  res.status(200).json({ msg: 'add product' });
};

const removeFromCart = (req, res) => {
  res.status(200).json({ msg: 'remove product' });
};

export { getProductsFromCart, addToCart, removeFromCart };
