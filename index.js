const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes'); // Import routes from routes.js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to the database");

    // Apply CORS middleware
    app.use(cors());
    app.use(express.json());

    // Define routes
    app.use('/', routes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
