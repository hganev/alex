import http from 'http';
require('dotenv').config();

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<div> Hello World </div> ');
}).listen(process.env.PORT || 3000, () => console.log(`Listening on ${ process.env.PORT || 3000 }`));
