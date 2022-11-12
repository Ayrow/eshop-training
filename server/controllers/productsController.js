import Product from '../models/Product.js';

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: 'get all products' });
};

const addToCart = (req, res) => {
  res.status(200).json({ msg: 'add product' });
};

const removeFromCart = (req, res) => {
  res.status(200).json({ msg: 'remove product' });
};

export { getAllProducts, addToCart, removeFromCart };
