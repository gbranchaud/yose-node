exports.one = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<!DOCTYPE html>\n<html><body>Hello Yose<ul><li><pre><a href="https://github.com/gbranchaud/yose-node">github repo</a></pre></li></ul></body></html>');
}
