var http = require("http");
var url = require("url");
var request = require("supertest");
var cheerio = require("cheerio");
var chai = require("chai");
var should = chai.should();
var router = require("../router");

var testServer = null;
describe("portfolio challenge", function () {
  before(function launchServer() {
    testServer = http.createServer(router.onRequest).listen(5001);
  });

  after(function stopServer() {
    testServer.close();
  });

  describe("contact information", function() {
    it("should include a 'Contact me' link on /", function (done) {
      request(testServer)
        .get("/")
        .expect(/a id="contact-me-link"/, done);
    });
  });
});
