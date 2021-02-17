import app from './app.js';
import dotenv from 'dotenv';

import connectDB from './config/database.js';

// Setting up the config file
dotenv.config({ path: 'backend/config/config.env' });

// Connecting to database
connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
