var startChallenge = require('./start-challenge');

exports.onRequest = function (req, res) {
  startChallenge.firstWebPage(req, res);
};
