import express from 'express';
const router = express.Router();

import {
  getProductsFromCart,
  addProductToCart,
  removeFromCart,
} from '../controllers/cartController.js';

import authenticateUser from '../middleware/auth.js';

router
  .route('/')
  .post(authenticateUser, addProductToCart)
  .delete(authenticateUser, removeFromCart)
  .get(authenticateUser, getProductsFromCart);

export default router;
