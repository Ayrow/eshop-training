import Product from '../models/Product.js';

const getAllProducts = async (req, res) => {
  const allProducts = await Product.find();
  console.log('allProducts', allProducts);
  res.status(200).json({ allProducts });
};

const addToCart = (req, res) => {
  res.status(200).json({ msg: 'add product' });
};

const removeFromCart = (req, res) => {
  res.status(200).json({ msg: 'remove product' });
};

export { getAllProducts, addToCart, removeFromCart };
