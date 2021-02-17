import express from 'express';

// Import all routes
import productRoutes from './routes/productRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/v1', productRoutes);

export default app;
