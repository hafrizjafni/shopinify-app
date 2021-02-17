import express from 'express';

import { newProduct, getProducts } from '../controllers/productController.js';

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/new').post(newProduct);

export default router;
