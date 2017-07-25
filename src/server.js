const http = require('http');
const fs = require('fs');
const path = require('path');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const router = require('./router.js');

const server = http.createServer(router);
// console.log(server);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

module.exports = {
  server: server,
}
