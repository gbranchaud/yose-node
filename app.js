var http = require('http');
var router = require('./router');

var port = process.env.PORT || 5000;

http.createServer(router.onRequest).listen(port);

console.log('Server running at localhost:' + port + '/');
