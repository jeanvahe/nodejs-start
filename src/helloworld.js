var http = require('http');
    logger = require('./common/logger'),
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Hello World\n'); 
}).listen(1337, "127.0.0.1"); 
 logger.error('Server running at http://127.0.0.1:1337/');
console.log('Server running at http://127.0.0.1:1337/');
