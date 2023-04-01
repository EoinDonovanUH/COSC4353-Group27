const request = require("supertest");
const app = require("../server");

describe("Registration Tests", () => {
  test("GET /", async () => {
    const res = await request(app).get("/register");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toEqual(2);
    expect(res.body.data[0].username).toBe("John");
    expect(res.body.data[0].password).toBe("johnpass");
    expect(res.body.data[1].username).toBe("Clyde");
    expect(res.body.data[1].password).toBe("clydepass");
  });

  test("POST / valid data", async () => {
    const res = await request(app).post("/register").send({
      username: "Steve",
      password: "stevepass",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toEqual(3);
    expect(res.body.data[0].username).toBe("John");
    expect(res.body.data[0].password).toBe("johnpass");
    expect(res.body.data[1].username).toBe("Clyde");
    expect(res.body.data[1].password).toBe("clydepass");
    expect(res.body.data[2].username).toBe("Steve");
    expect(res.body.data[2].password).toBe("stevepass");
  });

  test("POST / empty fields", async () => {
    const res = await request(app).post("/register").send({
      username: "",
      password: "",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("All fields are required");
  });

  test("POST / username already in use", async () => {
    const res = await request(app).post("/register").send({
      username: "John",
      password: "pass",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Username already in use");
  });
});
