const request = require("supertest");
const app = require("../server");

describe("Profile Management Tests", () => {
  test("GET /", async () => {
    const res = await request(app).get("/clients");
    expect(res.statusCode).toBe(200);
    /*expect(res.body.data.user_credentials).toBe("6428862f5e4783a6c7e04fba");
    expect(res.body.fullname).toBe("Bob Doe");
    expect(res.body.data.address1).toBe("1234 Main St.");
    expect(res.body.data.address2).toBe("1234 Cullen Blvd.");
    expect(res.body.data.city).toBe("Houston");
    expect(res.body.data.state).toBe("TX");
    expect(res.body.data.zipCode).toBe("77006");*/
  });

  test("POST / valid data", async () => {
    const res = await request(app).post("/clients").send({
      user_credentials: "6428862f5e4783a6c7e04fba",
      fullname: "Steve Jackson",
      address1: "600 Slippery Ave",
      address2: "132 Main St.",
      city: "Houston",
      state: "TX",
      zipcode: "34567",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("New client created");
  });

  test("POST / empty fields", async () => {
    const res = await request(app).post("/clients").send({
      user_credentials: "",
      fullname: "",
      address1: "",
      address2: undefined,
      city: "",
      state: "",
      zipCode: "",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("All fields except address2 are required");
  });

  test("POST / invalid input", async () => {
    const res = await request(app).post("/clients").send({
      fullname: "Steve Jackson",
      address1: "600 Slippery Ave",
      address2: undefined,
      city: "Houston",
      state: "TX",
      zipcode: "123",
    });
    expect(res.statusCode).toBe(400);
  });

  test("PATCH / valid data", async () => {
    const res = await request(app).patch("/clients").send({
      id: "6428fbdd15369e0f2e7fda7c",
      fullname: "Clyde Jackson",
      address1: "500 Freedom Ln",
      city: "Houston",
      state: "TX",
      zipcode: "45678",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("client updated")
  });

  test("PATCH / client not found", async () => {
    const res = await request(app).patch("/clients").send({
      user_credentials: "6428862f5e4783a6c7e04fb",
      fullname: "Clyde Jackson",
      address1: "500 Freedom Ln",
      city: "Houston",
      state: "TX",
      zipcode: "45678",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("All fields except address2 are required");
  });

  test("PATCH / empty fields", async () => {
    const res = await request(app).patch("/clients").send({
      fullname: "",
      address1: "",
      address2: undefined,
      city: "",
      state: "",
      zipcode: "",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe(
      "All fields except address2 are required"
    );
  });

  test("PATCH / invalid input", async () => {
    const res = await request(app).patch("/clients").send({
      fullname: "Steve Raymond-Leonard Jackson the Third of Westheimer West of the Mississippi",
      address1: "500 Freedom Ln",
      address2: undefined,
      city: "Houston",
      state: "TX",
      zipcode: "12343",
    });
    expect(res.statusCode).toBe(400);
  });

  test("DELETE /", async () => {
    const res = (await request(app).delete("/clients").send({id: "6428fd658bfaa961bd252b91"}));
    expect(res.statusCode).toBe(200);
    //expect(res.body.message).toBe("Profile deleted");
  });

  test("DELETE / Client ID required", async () => {
    const res = await request(app).delete("/clients");
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Client ID required");
  });

  test("DELETE / Client not found", async () => {
    const res = (await request(app).delete("/clients").send({id: "6428c5e8b1fa41c5557d4629"}));
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Client not found");
  });
});
