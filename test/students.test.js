const request = require("supertest");
const app = require("../src/app");

describe("Student API", () => {

    test("GET /students", async () => {
        const response = await request(app).get("/students");
        expect(response.statusCode).toBe(200);
    });

    test("POST /students", async () => {
        const response = await request(app)
        .post("/students")
        .send({name: "Ali"});

        expect(response.statusCode).toBe(201);
    });

});