import express from 'express';
const router = express.Router();

import {
  getAllProducts,
  addToCart,
  removeFromCart,
} from '../controllers/productsController.js';

router.route('/').get(getAllProducts);
router.route('/cart').post(addToCart);

export default router;
