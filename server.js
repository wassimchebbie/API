// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Set up routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
