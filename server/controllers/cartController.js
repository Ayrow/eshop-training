import User from '../models/User.js';
import Product from '../models/Product.js';

const getProductsFromCart = async (req, res) => {
  const id = req.user.userId;

  const user = await User.findOne({ _id: id });
  const userCart = user.cart;

  res.status(200).json(userCart);
};

const addProductToCart = async (req, res) => {
  const { id } = req.body;

  const user = await User.findOne({ _id: req.user.userId });
  const product = await Product.findOne({ _id: id });

  if (!user) {
    throw new Error('You need an account to add to cart');
  }

  if (!product) {
    throw new Error('Could not find the product');
  }

  await User.updateOne(
    { _id: req.user.userId },
    {
      $addToSet: {
        cart: {
          id: product._id,
          title: product.title,
          price: product.price,
          quantity: 1,
        },
      },
    }
  );

  res.status(200).json({ user, product });
};

const removeProductFromCart = async (req, res) => {
  const { id: productId } = req.params;

  console.log('productId', productId);

  // const product = await User.findOne(
  //   { _id: req.user.userId },
  //   {
  //     cart: {
  //       _id: productId,
  //     },
  //   }
  // );

  await User.updateOne(
    { _id: req.user.userId },
    {
      $pull: { cart: { id: productId } },
    }
  );

  res.status(200).json({ msg: 'delete product' });
  // res.status(200).json(productId);
};

export { getProductsFromCart, addProductToCart, removeProductFromCart };
