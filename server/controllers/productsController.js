import Product from '../models/Product.js';

const addProduct = (req, res) => {
  res.status(200).json({ msg: 'add product' });
};

const removeProduct = (req, res) => {
  res.status(200).json({ msg: 'remove product' });
};

export { addProduct, removeProduct };
