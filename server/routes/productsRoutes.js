import express from 'express';
const router = express.Router();

import {
  getAllProducts,
  addProduct,
  removeProduct,
} from '../controllers/productsController.js';

router.route('/').get(getAllProducts);

export default router;
