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

  const productExists = await User.findOne(
    { _id: req.user.userId },
    { cart: { $elemMatch: { id: product._id } } }
  );

  if (productExists.cart.length > 0) {
    const productQuantity = productExists.cart[0].quantity;

    await User.updateOne(
      { _id: req.user.userId },
      { $set: { 'cart.$[cart].quantity': productQuantity + 1 } },
      {
        arrayFilters: [
          {
            'cart.id': id,
          },
        ],
      }
    );
  } else {
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
  }

  res.status(200).json({ user, product });
};

const removeProductFromCart = async (req, res) => {
  const { id: productId } = req.params;

  await User.updateOne(
    { _id: req.user.userId },
    {
      $pull: { cart: { id: productId } },
    }
  );

  res.status(200).json(productId);
};

const emptyCart = async (req, res) => {
  await User.updateOne({ _id: req.user.userId }, { cart: [] });

  res.status(200).json({ msg: 'empty cart' });
};

const updateQuantityProduct = async (req, res) => {
  const { id: productId } = req.params;
  const { type } = req.body;

  const productToUpdate = await User.findOne(
    { _id: req.user.userId },
    { cart: { $elemMatch: { id: productId } } }
  );

  const productQuantity = productToUpdate.cart[0].quantity;

  if (productQuantity > 1 && type === 'subtract') {
    await User.updateOne(
      { _id: req.user.userId },
      { $set: { 'cart.$[cart].quantity': productQuantity - 1 } },
      {
        arrayFilters: [
          {
            'cart.id': productId,
          },
        ],
      }
    );
  } else if (type === 'add') {
    await User.updateOne(
      { _id: req.user.userId },
      { $set: { 'cart.$[cart].quantity': productQuantity + 1 } },
      {
        arrayFilters: [
          {
            'cart.id': productId,
          },
        ],
      }
    );
  } else {
    await User.updateOne(
      { _id: req.user.userId },
      {
        $pull: { cart: { id: productId } },
      }
    );
  }

  res.status(200).json({ msg: 'update quantity' });
};

export {
  getProductsFromCart,
  addProductToCart,
  removeProductFromCart,
  emptyCart,
  updateQuantityProduct,
};
