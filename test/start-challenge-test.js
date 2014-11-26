var http = require("http");
var request = require("supertest");
var router = require("../router");

var testServer = null;
describe("start challenge", function () {
  before(function launchServer() {
    console.log()
    testServer = http.createServer(router.onRequest).listen(5001);
  });

  describe("first web page", function() {
    it("should return a successful html response on /", function (done) {
      request(testServer)
        .get("/")
        .expect(200)
        .expect("Content-Type", "text/html", done);
    });

    it("should return a response containing 'Hello Yose' on /", function (done) {
      request(testServer)
      .get("/")
      .expect(/Hello Yose/, done);
    });

    it("should return 404 for non-existing endpoints such as /missing-page", function (done) {
      request(testServer)
        .get("/missing-page")
        .expect(404, done);
    });
  });

  describe("first web service", function () {
    it("should return a successful json response on /ping", function (done) {
      request(testServer)
      .get("/ping")
      .expect(200)
      .expect("Content-Type", "application/json", done);
    });

    it("should return { 'alive': 'true' } response on /ping", function (done) {
      request(testServer)
      .get("/ping")
      .expect('{ "alive" : "true" }', done);
    });
  });
});
