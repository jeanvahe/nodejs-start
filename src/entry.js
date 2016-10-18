'use strict';

/**
 * start different process identified by method
 * Worker - 
 */

var method = process.argv.slice(2)[0],
    port = process.argv.slice(2)[1],
    logger = require('./common/logger');
var http = require('http');

if (method === 'worker') {
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Hello World\n'); 
    }).listen(1337, "127.0.0.1"); 
}
