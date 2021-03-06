const http = require('http');

// Set Constants
const hostname = '127.0.0.1';
const port = 8080;

// HTTP server using Express to handle incoming requests
const express = require('express');
const server = express();
const path = require('path');
const logger = require('morgan'); // helps log all requests

const cookieParser = require('cookie-parser'); // for handling cookies
const bodyParser = require('body-parser'); // for parsing request URL

const sql = require('sql');

const cors = require('cors');

server.use(cors());

// Set Routes
const index = require('./routes/appointments');
const tabs = require('./routes/buisnesses');
const tabs = require('./routes/users');

const port = 8080;

// set up logger and parsers
server.use(logger('dev')); // set up logger and parsers

server.use(bodyParser.json());

server.use(cookieParser());

//View Engine

server.set('views', path.join(__dirname, '/../alfred-ui/dist'));

server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile)

// Static route for client-side code generated by Angular
server.use(express.static(path.join(__dirname, '/../alfred-ui/dist')));

server.use('/', index);
server.use('/api', tabs);

// Function to handle client errors
server.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
