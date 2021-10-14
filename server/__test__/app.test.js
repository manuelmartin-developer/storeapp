const supertest = require("supertest");
const {
    app,
    server
} = require('../app');
const request = supertest(app);
const mongoose = require('mongoose');
const { Pool, Client } = require('pg')


describe("PRODUCTS - GET / ", () => {
    test("Get all products, it should respond code 200", async () => {
        const response = await request.get("/products");
        expect(response.statusCode).toBe(200);
    });
});
describe("PRODUCTS - POST / ", () => {
    test("Adding a product, it should respond code 201", async () => {
        const response = await request
            .post("/products/add")
            .send({

                "title": "Testing API",
                "image": "https://ichi.pro/assets/images/max/724/1*nty1EGxVNzehcuyDOBD-Lg.png",
                "rating": 5,
                "price": 10.5,
                "name": "Jest",
                "cif": "A0000000",
                "address": "California"
                
            })
            expect(response.statusCode).toBe(201);
    });
    test("Updating a product, it should respond code 200", async () => {
        const response = await request
            .post("/products/update")
            .send({
                "id": "productId-0000052",
                "title": "Testing Update product API",
                "image": "https://ichi.pro/assets/images/max/724/1*nty1EGxVNzehcuyDOBD-Lg.png",
                "rating": 5,
                "price": 10.5,
                "name": "Jest",
                "cif": "A0000000",
                "address": "California"
                
            })
            expect(response.statusCode).toBe(200);
    });
    test("Deleting a product, it should respond code 202", async () => {
        const response = await request
            .post("/products/remove")
            .send({ "id": "productId-0000052" })
            expect(response.statusCode).toBe(202);
    });
});
describe("USERS - POST / ", () => {
    test("Signing Up a user, it should respond code 201", async () => {
        const response = await request
            .post("/users/signup")
            .send({

                "name": "Test",
                "surname": "User",
                "email": "test@test.com",
                "password": "12345678",
                "address": "Test",
                
            })
            expect(response.statusCode).toBe(201);
    });
    test("Login a user, it should respond code 200 and token", async () => {
        const response = await request
            .post("/users/login")
            .send({
                "email": "test@test.com",
                "password": "12345678",   
            })
            expect(response.statusCode).toBe(200);
            expect(response.body.token).not.toBeUndefined();
            expect(response.body.token).not.toBeNull();
            expect(response.body.token).not.toBe("");
    });
    test("Logout a user without token, it should respond code 403", async () => {
        const response = await request
            .post("/users/logout")
            expect(response.statusCode).toBe(403);
    });
    test("Reseting user password, it should respond code 200", async () => {
        const response = await request
            .post("/users/reset")
            .send({
                "email": "test@test.com",
                "pass1": "87654321",   
            })
            expect(response.statusCode).toBe(200);
    });

});

afterAll(async () => {
    server.close()
    mongoose.connection.close();
});