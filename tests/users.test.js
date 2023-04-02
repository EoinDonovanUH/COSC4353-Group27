const request = require("supertest");
const app = require("../server");

describe("User Tests", () => {
    test("GET /", async () => {
        const res = await request(app).get("/users");
        expect(res.statusCode).toBe(200);
    });

    test("POST / valid user", async () => {
        const res = await request(app).post("/users").send({
            username: "Jeremy Johnson",
            password: "abcd11234"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe("New user Jeremy Johnson created");
    })

    test("POST / duplicate username", async () => {
        const res = await request(app).post("/users").send({
            username: "Jerry Johnson",
            password: "abcd11234"
        });
        expect(res.statusCode).toBe(409);
        expect(res.body.message).toBe("Duplicate username");
    })

    test("POST / invalid user credentials", async () => {
        const res = await request(app).post("/users").send({
            username: "",
            password: ""
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("All fields are required");
    })

    test("PATCH / valid data", async () => {
        const res = await request(app).patch("/users").send({
          id: "6428862f5e4783a6c7e04fba",
          username: "Clyde Johnson",
          password: "myNewPassword"
        });
        //expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe("Clyde Johnson updated")
    });

    test("PATCH / missing data", async () => {
        const res = await request(app).patch("/users").send({
          id: "6428862f5e4783a6c7e04f",
          username: "",
          password: "myNewPassword"
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("All fields except password are required")
    });

    test("PATCH / invalid data", async () => {
        const res = await request(app).patch("/users").send({
          id: "6428fafa5dec0f57f59f81bb",
          username: "Clyde Johnson",
          password: "myNewPassword"
        });
        expect(res.statusCode).toBe(409);
        expect(res.body.message).toBe("Duplicate username")
    });

    test("DELETE /", async () => {
        const res = (await request(app).delete("/users").send({id: "6428862f5e4783a6c7e04fba"}));
        //expect(res.statusCode).toBe(200);
        expect(res.body.reply).toBe("Username Clyde Johnson with ID 6428862f5e4783a6c7e04fba deleted");
    });

    test("DELETE / id required", async () => {
        const res = (await request(app).delete("/users").send({id: ""}));
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("User ID required");
    });

    test("DELETE / user not found", async () => {
        const res = (await request(app).delete("/users").send({id: "6429b4d5"}));
        expect(res.statusCode).toBe(400);
        expect(res.body.reply).toBe("User not found");
    });
});