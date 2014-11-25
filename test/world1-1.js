var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");
var w1 = require("../world-one.js");

describe("world 1-1", function () {
  it("should return 200 OK", function () {
    var res = {writeHead: sinon.spy(), end: sinon.spy()};
    w1.one({}, res);

    expect(res.writeHead.args[0][0]).to.equal(200);
  });

  it("should return a response containing 'Hello Yose'", function () {
    var res = {writeHead: sinon.spy(), end: sinon.spy()};
    w1.one({}, res);

    var responseBody = res.end.args[0][0];
    expect(responseBody).to.contain("Hello Yose");
  });
});
