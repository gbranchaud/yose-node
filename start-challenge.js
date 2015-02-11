var fs = require('fs');

exports.firstWebPage = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync("./assets/home.html", {encoding: "utf8"}));
};

exports.firstWebService = function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{ "alive" : true }');
};
