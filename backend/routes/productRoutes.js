import express from 'express';

import {
  newProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getProductById);

router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);

export default router;
