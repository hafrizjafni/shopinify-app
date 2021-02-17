import express from 'express';

import {
  newProduct,
  getProducts,
  getProductById,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getProductById);
router.route('/product/new').post(newProduct);

export default router;
