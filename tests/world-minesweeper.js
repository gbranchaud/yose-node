var http = require("http");
var url = require("url");
var request = require("supertest");
var cheerio = require("cheerio");
var chai = require("chai");
var should = chai.should();
var router = require("../router");

var testServer = null;
describe("World Minesweeper", function () {
  before(function launchServer() {
    testServer = http.createServer(router.onRequest).listen(5001);
  });

  after(function stopServer() {
    testServer.close();
  });

  describe("Minesweeper board", function () {
    it("should return a successful html response on /minesweeper", function (done) {
      request(testServer)
        .get("/minesweeper")
        .expect(200)
        .expect("Content-Type", "text/html", done);
    });

    it("page should have a title element with Minesweeper text", function (done) {
      request(testServer)
        .get("/minesweeper")
        .expect(function (response) {
          var $ = cheerio.load(response.text);
          $("#title")[0].children[0].nodeValue.should.contain("Minesweeper");
        })
        .end(done);
    });
  });
});
