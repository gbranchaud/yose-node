var w1 = require('./world-one');

exports.onRequest = function (req, res) {
  w1.one(req, res);
};
