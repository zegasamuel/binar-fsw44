const request = require('supertest');
const app = require('../app'); // Adjust the path as needed
const chai = require('chai');
const expect = chai.expect;

describe('API test', () => {
    it('should fetch all users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an('array');
        response.body.forEach(user => {
            expect(user).to.be.an('object')
            expect(user).to.have.property('id')
            expect(user).to.have.property('name')
            expect(user).to.have.property('email')
            expect(user).to.have.property('date_of_birth')
            expect(user).to.have.property('created_at')
            expect(user).to.have.property('updated_at')
        });
    }); // Increase the timeout to 10 seconds
    it('should post new user, but failed duplicate user', async () => {
        const response = await request(app).post('/users').send({
            "name": "Putra",
            "email": "putra1@example.com",
            "date_of_birth": "1999-12-31T17:00:00.000Z"
        });
        expect(response.status).to.equal(401)
    });
    it('should post new user, but failed duplicate user', async () => {
        const response = await request(app).post('/users').send({
            "name": "Putra1233211",
            "email": "putra1233211@example.com",
            "date_of_birth": "1999-12-31T17:00:00.000Z"
        });
        expect(response.status).to.equal(201)
    });
});


