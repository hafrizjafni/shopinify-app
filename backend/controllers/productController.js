import Product from '../models/productModel.js';

// @desc    Create new product
// @route   POST /api/v1/product/new
// @access  Private/Admin
const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    succes: true,
    count: products.length,
    products,
  });
};

// @desc    Get a single product
// @route   GET /api/v1/product/:id
// @access  Public
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(200).json({
      success: true,
      product,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Product not found.',
    });
  }
};

export { newProduct, getProducts, getProductById };
