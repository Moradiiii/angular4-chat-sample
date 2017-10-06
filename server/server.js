
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var http = require('http');
var path = require('path');
var debug = require('debug')('mean-app:server');

// declare routers

var app = express();

app.use(bodyParser.json());
app.use(cors());

var discussionRoutes = require('./routes/discussion.routes');

// define routers
app.use('/discussion', discussionRoutes);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

/**
 * socket io
 */
var io = require('socket.io')(server); // socket io for chat
global.io = io;

server.on('error', onError);
server.on('listening', onListening)

/**
 * Event listener for http server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for http server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/**
 * Listen for socket io messages and process each accordingly.
 */
io.on('connection', function (socket) {

    console.log('User connected');

    socket.on('disconnect', function() {
        console.log('User disconnected');
    });

    socket.on('new-chat', function (data) {
        console.log(data);
        io.emit('new-chat', data);
    });

});
