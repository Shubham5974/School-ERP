// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

// Student routes
router.post('/create', authMiddleware, studentController.createStudent); // Requires authentication
router.get('/', authMiddleware, studentController.getAllStudents); // Requires authentication
router.get('/:id', authMiddleware, studentController.getStudentById); // Requires authentication
router.put('/:id', authMiddleware, studentController.updateStudent); // Requires authentication
router.delete('/:id', authMiddleware, studentController.deleteStudent); // Requires authentication

module.exports = router;
