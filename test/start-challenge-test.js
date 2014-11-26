var http = require("http");
var url = require("url");
var request = require("supertest");
var cheerio = require("cheerio");
var chai = require("chai");
var should = chai.should();
var router = require("../router");

var testServer = null;
describe("start challenge", function () {
  before(function launchServer() {
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

    it("should return { 'alive': true } response on /ping", function (done) {
      request(testServer)
        .get("/ping")
        .expect('{ "alive" : true }', done);
    });
  });

  describe("share", function () {
    it("should return an html page with a repo link on /", function (done) {
      request(testServer)
        .get("/")
        .expect(/a id="repository-link"/, done);
    });

    it("repo link element should point to an absolute url", function (done) {
      request(testServer)
        .get("/")
        .expect(function(response) {
          var $ = cheerio.load(response.text);
          $("a#repository-link").attr("href").should.equal("https://github.com/gbranchaud/yose-node");
        })
        .end(done);
    });

    it.skip("(SLOW!) url pointed-to by the repo link should contain YoseTheGame in its readme", function (done) {
      request("https://github.com")
        .get("/gbranchaud/yose-node")
        .expect(function(response) {
          var $ = cheerio.load(response.text);
          $("#readme").text().should.contain("YoseTheGame");
        })
        .end(done);
    });
  });
});
