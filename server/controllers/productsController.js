import Product from '../models/Product.js';

const getAllProducts = async (req, res) => {
  const allProducts = await Product.find();
  res.status(200).json(allProducts);
};

export { getAllProducts };
