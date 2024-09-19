// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// User routes
router.post('/signup', authController.signup);
router.post('/login', authController.loginUser);
router.get('/users', authMiddleware, authController.getAllUsers); // Requires authentication
router.get('/users/:id', authMiddleware, authController.getUserById); // Requires authentication
router.put('/users/:id', authMiddleware, authController.updateUser); // Requires authentication
router.delete('/users/:id', authMiddleware, authController.deleteUser); // Requires authentication

module.exports = router;
