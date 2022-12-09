import User from '../models/User.js';
import Product from '../models/Product.js';

const getProductsFromCart = async (req, res) => {
  const id = req.user.userId;

  const user = await User.findOne({ _id: id });
  const userCart = user.cart;
  const productsInCart = await Product.find({ _id: userCart });
  res.status(200).json(productsInCart);
};

const addProductToCart = async (req, res) => {
  const { id } = req.body;

  const user = await User.findOne({ _id: req.user.userId });
  const product = await Product.findOne({ _id: id });

  if (!user) {
    throw new Error('You need an account to add to cart');
  }

  await User.updateOne(
    { _id: req.user.userId },
    { $addToSet: { cart: product } }
  );

  res.status(200).json({ user, product });
};

const removeFromCart = (req, res) => {
  res.status(200).json({ msg: 'remove product' });
};

export { getProductsFromCart, addProductToCart, removeFromCart };
