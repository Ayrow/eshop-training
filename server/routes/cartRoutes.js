import express from 'express';
const router = express.Router();

import {
  getProductsFromCart,
  addProductToCart,
  removeProductFromCart,
  emptyCart,
} from '../controllers/cartController.js';

import authenticateUser from '../middleware/auth.js';

router
  .route('/')
  .post(authenticateUser, addProductToCart)
  .get(authenticateUser, getProductsFromCart)
  .delete(authenticateUser, emptyCart);

router.route('/:id').delete(authenticateUser, removeProductFromCart);

export default router;
