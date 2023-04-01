const request = require("supertest");
const app = require("../server");

describe("Fuel Quote History Tests", () => {
  test("GET / available quotes", async () => {
    const res = await request(app).get("/quotehistory/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toEqual(1);
    expect(res.body.data[0].gallons).toEqual(10000);
  });

  test("GET / no available quotes", async () => {
    const res = await request(app).get("/quotehistory/2");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("No quotes found");
  });
});
