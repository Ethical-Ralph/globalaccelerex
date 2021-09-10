import * as chai from "chai";
import chaiHttp = require("chai-http");
import { app } from "../src/index";
import { describe, test } from "mocha";

const expect = chai.expect;
chai.use(chaiHttp);

describe("Tests", () => {
  test("Ping App", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  test("Invalid Route", (done) => {
    chai
      .request(app)
      .get("/invalid")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.error.message).to.equal("Not Found");
        done();
      });
  });
});
