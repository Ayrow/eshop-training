import User from '../models/User.js';

const getProductsFromCart = (req, res) => {
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
