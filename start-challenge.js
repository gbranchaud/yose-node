exports.firstWebPage = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<!DOCTYPE html>\n<html><body>Hello Yose<ul><li><pre><a id="contact-me-link"/> <a id="repository-link" href="https://github.com/gbranchaud/yose-node">github repo</a></pre></li></ul></body></html>');
}

exports.firstWebService = function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{ "alive" : true }');
}
