'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

_http2.default.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<div> Hello World </div> ');
  res.end('<div>Hello World</div>');
}).listen(process.env.PORT || 3000, function () {
  return console.log('Listening on ' + (process.env.PORT || 3000));
});