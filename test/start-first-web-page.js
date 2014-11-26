var http = require("http");
var request = require("supertest");
var router = require("../router");

describe("start challenge - first web page", function () {
  var testServer = http.createServer(router.onRequest).listen(5001);

  it("should return a successful response containing 'Hello Yose'", function (done) {
    request(testServer)
      .get("/")
      .expect(200)
      .expect(/Hello Yose/, done);
  });

});
