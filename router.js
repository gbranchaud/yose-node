var url = require("url");
var home = require('./endpoints/home');
var minesweeper = require('./endpoints/minesweeper');
var ping = require('./endpoints/ping');

exports.onRequest = function (request, response) {
    var routes = [
      { resource:/^\/$/,            endpoint:home.handle },
      { resource:/^\/minesweeper$/, endpoint:minesweeper.handle},
      { resource:/^\/ping$/,        endpoint:ping.handle },
      { resource:/^.*$/,            endpoint:answerWith404 },
    ];
  var parsedUrl = url.parse(request.url);

  routes.forEach(function(route) {
    if(route.resource.test(parsedUrl.pathname)) {
      route.endpoint(request, response);
    }
  });
};

function answerWith404(request, response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.end("page not found.");
}
