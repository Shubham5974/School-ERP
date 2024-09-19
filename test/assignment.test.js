const request = require('supertest');
const app = require('../app'); // Adjust the path as needed

describe('Assignment API', () => {
  it('should create an assignment', async () => {
    const response = await request(app)
      .post('/api/assignments/create')
      .set('Authorization', 'Bearer <your-jwt-token>') // Replace with a valid token
      .send({
        title: 'Math Homework',
        description: 'Complete exercises 1 to 10',
        dueDate: '2024-10-01',
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Assignment created successfully');
  });

  // Additional tests for update, delete, and get assignments can be added here
});
