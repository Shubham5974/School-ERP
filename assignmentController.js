const Assignment = require('../models/Assignment');

exports.createAssignment = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const newAssignment = new Assignment({
      title,
      description,
      dueDate,
      status: 'Pending',
    });

    await newAssignment.save();
    res.status(201).json({ message: 'Assignment created successfully', assignment: newAssignment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Additional methods for update, delete, and get assignments can be added here
