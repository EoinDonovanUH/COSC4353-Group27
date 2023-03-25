const request = require("supertest");
const app = require("../server");

describe("Fuel Quote Form Tests", () => {
  test("GET /", async () => {
    const res = await request(app).get("/quoteform/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe("1");
    expect(res.body.address).toBe("200 Main St");
  });

  test("POST / valid data", async () => {
    const res = await request(app).post("/quoteform/1").send({
      gallons: "5000",
      date: "2023-5-21",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toEqual(2);
    expect(res.body.data[1].clientID).toEqual(1);
    expect(res.body.data[1].gallons).toEqual(5000);
    expect(res.body.data[1].date).toEqual("2023-5-21");
  });

  test("POST / empty fields", async () => {
    const res = await request(app).post("/quoteform/1").send({
      gallons: "",
      date: "",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("All fields are required");
  });

  test("POST / invalid gallons", async () => {
    const res = await request(app).post("/quoteform/1").send({
      gallons: "100",
      date: "2023-5-21",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe(
      "Gallons requested must be between 2,500 and 11,000"
    );
  });

  test("POST / invalid date", async () => {
    const res = await request(app).post("/quoteform/1").send({
      gallons: "5000",
      date: "2024-5-21",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe(
      "Delivery date must be between 2023-2-22 and 2023-12-31"
    );
  });
});
