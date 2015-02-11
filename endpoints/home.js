var fs = require('fs');

exports.handle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync("./assets/home.html", {encoding: "utf8"}));
};
