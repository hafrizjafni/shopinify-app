import Product from '../models/productModel.js';

const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

const getProducts = (req, res) => {
  res.status(200).json({
    succes: true,
    message: 'This route will show all products in database.',
  });
};

export { newProduct, getProducts };
