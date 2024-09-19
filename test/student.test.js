const request = require('supertest');
const app = require('../app'); // Adjust the path as needed

describe('Student API', () => {
  it('should create a student', async () => {
    const response = await request(app)
      .post('/api/students/create')
      .set('Authorization', 'Bearer <your-jwt-token>') // Replace with a valid token
      .send({
        name: 'John Doe',
        rollNumber: '12345',
        class: '10',
        section: 'A',
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Student created successfully');
  });

  // Additional tests for update, delete, and get students can be added here
});
