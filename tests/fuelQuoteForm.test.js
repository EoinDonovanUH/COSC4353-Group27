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

  test("POST /", (done) => {
    request(app)
      .post("/quoteform/1")
      .expect("Content-Type", /json/)
      .send({
        gallons: "5000",
        date: "2023-5-21",
      })
      .expect(200)
      .expect((res) => {
        res.body.data.length == 2;
        res.body.data[0].gallons == "100";
        res.body.data[0].date == "2023-5-21";
        res.body.data[1].gallons == "5000";
        res.body.data[1].date == "2023-5-21";
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
