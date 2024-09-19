// controllers/studentController.js

const Student = require('../models/Student');

// Function to create a new student
exports.createStudent = async (req, res) => {
  const { name, rollNumber, class: studentClass, section } = req.body;
  try {
    const newStudent = new Student({ name, rollNumber, class: studentClass, section });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to get a student by ID
exports.getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to update a student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const student = await Student.findByIdAndUpdate(id, updates, { new: true });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to delete a student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
