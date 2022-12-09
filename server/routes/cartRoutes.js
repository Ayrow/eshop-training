import express from 'express';
const router = express.Router();

import {
  getProductsFromCart,
  addToCart,
  removeFromCart,
} from '../controllers/cartController.js';

import authenticateUser from '../middleware/auth.js';

router
  .route('/')
  .get(authenticateUser, getProductsFromCart)
  .post(authenticateUser, addToCart)
  .delete(removeFromCart);

export default router;
