const request = require("supertest");
const app = require("../server");

describe("Client Profile Tests", () => {
    test("GET /", (done) => {
        request(app)
            .get("/clients")
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
            .post("/clients")
            .expect("Content-Type", /json/)
            .send({
                user_credentials: "1",
                fullname: "Jane Doe",
                address1: "1234 Main St.",
                address2: "456 Cullen Blvd.",
                city: "Houston",
                state: "TX",
                zipcode: "77204"
            })
            .expect(200)
            .expect((res) => {
                res.message = 'New client created'
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });

    test("PATCH /", (done) => {
        request(app)
            .patch("/clients")
            .expect("Content-Type", /json/)
            .send({
                id: "1",
                fullname: "Jane Doe",
                address1: "1234 Main St.",
                address2: "456 Cullen Blvd.",
                city: "Houston",
                state: "TX",
                zipcode: "77204"
            })
            .expect(200)
            .expect((res) => {
                res.message = 'updated'
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });

    test("DELETE /", (done) => {
        request(app)
            .delete('/clients')
            .expect("Content-Type", /json/)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });
});