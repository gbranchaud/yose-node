var url = require("url");
var startChallenge = require('./start-challenge');

exports.onRequest = function (request, response) {
  var parsedUrl = url.parse(request.url);

  if (parsedUrl.pathname === "/") {
    startChallenge.firstWebPage(request, response);
  } else if (parsedUrl.pathname === "/ping") {
    startChallenge.firstWebService(request, response);
  } else {
    fallbackOn404(request, response);
  }
};

function fallbackOn404(request, response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.end("page not found.");
}
