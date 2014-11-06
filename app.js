var http = require('http');

var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<!DOCTYPE html>\n<html><body>Hello Yose<ul><li><pre><a href="https://github.com/gbranchaud/yose-node">github repo</a></pre></li></ul></body></html>');
}).listen(port);

console.log('Server running at localhost:' + port + '/');
