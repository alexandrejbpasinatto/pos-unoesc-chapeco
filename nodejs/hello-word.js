var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Node.js FTW! \n</h1>');
  res.end('Hello World\n');
}).listen(3000, "127.0.0.1");


console.log('Server running at http://127.0.0.1:3000/');