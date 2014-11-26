var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");
var startChallenge = require("../start-challenge.js");

describe("start challenge - first web page", function () {
  it("should return 200 OK", function () {
    var res = {writeHead: sinon.spy(), end: sinon.spy()};
    startChallenge.firstWebPage({}, res);

    expect(res.writeHead.args[0][0]).to.equal(200);
  });

  it("should return a response containing 'Hello Yose'", function () {
    var res = {writeHead: sinon.spy(), end: sinon.spy()};
    startChallenge.firstWebPage({}, res);

    var responseBody = res.end.args[0][0];
    expect(responseBody).to.contain("Hello Yose");
  });
});
