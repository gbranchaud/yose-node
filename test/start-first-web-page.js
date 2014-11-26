var http = require("http");
var chai = require("chai");
var expect = chai.expect;
var router = require("../router.js");

describe("start challenge - first web page", function () {
  var testServer = http.createServer(router.onRequest).listen(5001);
  testServer.on("close", function() { console.log("end of server"); });

  it("should return 200 OK", function () {
    http.get("http://localhost:5001", function(res) {
      expect(res.statusCode).equal(200);
    });
  });

  it("should return a response containing 'Hello Yose'", function () {
    http.get("http://localhost:5001", function(res) {
      res.once('data', function (chunk) {
        expect(chunk.toString()).contain("Hello Yose");
      });
    });
  });

});
