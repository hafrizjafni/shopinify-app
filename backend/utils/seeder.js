import dotenv from 'dotenv';
import connectDB from '../config/database.js';
import Product from '../models/productModel.js';

import products from '../data/products.js';

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' });

// Connecting to database
connectDB();

const importData = async () => {
  try {
    // Delete all products in the database
    await Product.deleteMany();
    console.log('Products are deleted.');

    // Insert all products from the data
    await Product.insertMany(products);
    console.log('New products are added.');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
