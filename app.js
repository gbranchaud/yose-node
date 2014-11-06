var http = require('http');

var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Live on heroku\n');
}).listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + port + '/');
