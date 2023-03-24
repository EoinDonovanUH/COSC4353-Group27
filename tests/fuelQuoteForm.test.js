const request = require("supertest");
const app = require("../server");

describe("Fuel Quote Form Tests", () => {
  test("GET /", (done) => {
    request(app)
      .get("/quoteform/1")
      .expect(201)
      .expect("Content-Type", /json/)
      .expect((res) => {
        res.body.length == 1;
        res.body.id == 1;
        res.body.address == "200 Main St";
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
