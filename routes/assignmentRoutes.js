const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, assignmentController.createAssignment);

// Additional routes for update, delete, and get assignments can be added here

module.exports = router;
