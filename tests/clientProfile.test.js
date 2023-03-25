const request = require("supertest");
const app = require("../server");

describe("Profile Management Tests", () => {
  test("GET /", async () => {
    const res = await request(app).get("/profile/2");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.userCredentials).toBe(2);
    expect(res.body.data.fullName).toBe("Clyde Jackson");
    expect(res.body.data.address1).toBe("1500 Riverdale Rd");
    expect(res.body.data.address2).toBe(undefined);
    expect(res.body.data.city).toBe("Houston");
    expect(res.body.data.state).toBe("TX");
    expect(res.body.data.zipCode).toBe("23456");
  });

  test("POST / valid data", async () => {
    const res = await request(app).post("/profile/3").send({
      fullName: "Steve Jackson",
      address1: "600 Slippery Ave",
      address2: undefined,
      city: "Houston",
      state: "TX",
      zipCode: "34567",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.userCredentials).toBe(3);
  });

  test("POST / empty fields", async () => {
    const res = await request(app).post("/profile/3").send({
      fullName: "",
      address1: "",
      address2: undefined,
      city: "",
      state: "",
      zipCode: "",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe(
      "All fields except for address2 are required"
    );
  });

  test("POST / invalid input", async () => {
    const res = await request(app).post("/profile/3").send({
      fullName: "Steve Jackson",
      address1: "600 Slippery Ave",
      address2: undefined,
      city: "Houston",
      state: "TX",
      zipCode: "123",
    });
    expect(res.statusCode).toBe(400);
  });

  test("PATCH / valid data", async () => {
    const res = await request(app).patch("/profile/2").send({
      fullName: "Clyde Jackson",
      address1: "500 Freedom Ln",
      city: "Houston",
      state: "TX",
      zipCode: "45678",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.userCredentials).toBe(2);
  });

  test("PATCH / client not found", async () => {
    const res = await request(app).patch("/profile/4").send({
      fullName: "Clyde Jackson",
      address1: "500 Freedom Ln",
      city: "Houston",
      state: "TX",
      zipCode: "45678",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Client not found");
  });

  test("PATCH / empty fields", async () => {
    const res = await request(app).patch("/profile/2").send({
      fullName: "",
      address1: "",
      address2: undefined,
      city: "",
      state: "",
      zipCode: "",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe(
      "All fields except for address2 are required"
    );
  });

  test("PATCH / invalid input", async () => {
    const res = await request(app).patch("/profile/2").send({
      fullName: "Steve Jackson",
      address1: "500 Freedom Ln",
      address2: undefined,
      city: "Houston",
      state: "TX",
      zipCode: "123",
    });
    expect(res.statusCode).toBe(400);
  });

  test("DELETE /", async () => {
    const res = await request(app).delete("/profile/2");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Profile deleted");
    expect(res.body.data.length).toBe(2);
  });

  test("DELETE / client not found", async () => {
    const res = await request(app).delete("/profile/4");
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Client not found");
  });
});
