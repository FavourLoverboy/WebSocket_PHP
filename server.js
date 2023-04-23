const { timeStamp } = require('console');
var socket = require('socket.io'),
    express = require('express'),
    https = require('https'),
    http = require('http'),
    logger = require('winston');

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true, timestamp: true });
logger.info("SocketIO > listening on port ");

// HTTPS
// var https_server = https.createServer({
//     key: fs.readFileSync(''),
//     cert: fs.readFileSync(''),
// }, app.listen(3000));

var app = express();
var http_server = http.createServer(app).listen(3001);

function emitNewData(http_server){
    var io = socket(http_server);

    // first listen to a connection and run the call back function
    io.on('connection', function(socket){

    });
}

emitNewData(http_server);