import User from '../models/User.js';
import Product from '../models/Product.js';

const getProductsFromCart = async (req, res) => {
  // console.log('req', req.user);
  // const id = req.user.userId;

  // const user = await User.findOne({ _id: id });
  // const userCart = user.cart;
  // const productsInCart = await Product.find({ _id: userCart });

  // console.log('userCart', { productsInCart, user });

  res.status(200).json({ msg: 'get all products from cart' });
};

const addProductToCart = async (req, res) => {
  const { id } = req.body;
  console.log('id', id);
  // console.log('req.user.userId', req.user.userId);
  // console.log('id', id);
  // const user = await User.findOne({ _id: req.user.userId });
  // const product = await Product.findOne({ _id: id });

  // if (!user) {
  //   throw new Error('You need an account to add to cart');
  // }

  // await User.updateOne({ _id: req.user.userId }, { $addToSet: { cart: id } });

  // res.status(200).json({ user });
  res.status(200).json({ msg: 'add to cart' });
};

const removeFromCart = (req, res) => {
  res.status(200).json({ msg: 'remove product' });
};

export { getProductsFromCart, addProductToCart, removeFromCart };
