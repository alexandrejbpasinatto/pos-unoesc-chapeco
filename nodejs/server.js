var http = require ('http');

http.CreateServer(function(req, res)){
	res.writeHead(200,{'content-Type': 'text-html; charset: utf-8'});
	console.log(req.url);
}).listen(3000);