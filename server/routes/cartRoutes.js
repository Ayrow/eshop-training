import express from 'express';
const router = express.Router();

import {
  getProductsFromCart,
  addToCart,
  removeFromCart,
} from '../controllers/cartController.js';

router
  .route('/')
  .get(getProductsFromCart)
  .post(addToCart)
  .delete(removeFromCart);

export default router;
