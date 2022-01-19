const request = require('supertest');
const app = require('../server');

describe('GET Endpoints', () => {
  it('should get status code 200', async () => {
    const res = await request(app)
      .get('/');
    expect(res.statusCode).toEqual(200);
  });
  it("should get text: 'Test route working!'", async () => {
    const res = await request(app)
      .get('/');
    expect(res.text).toBe('Test route working!');
  });
});
