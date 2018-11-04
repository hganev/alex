import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT || 3000, () => console.log(`Listening on ${ process.env.PORT || 3000 }`));
