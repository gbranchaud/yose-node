var url = require("url");
var home = require('./endpoints/home');
var ping = require('./endpoints/ping');

exports.onRequest = function (request, response) {
  var parsedUrl = url.parse(request.url);

  if (parsedUrl.pathname === "/") {
    home.handle(request, response);
  } else if (parsedUrl.pathname === "/ping") {
    ping.handle(request, response);
  } else {
    fallbackOn404(request, response);
  }
};

function fallbackOn404(request, response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.end("page not found.");
}
