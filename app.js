require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Your routes and other middleware

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
