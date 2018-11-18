const express = require('express');
const sslRedirect = require('heroku-ssl-redirect');
const compression = require('compression');
const path = require('path');

const server = express();

const buildPath = path.join(__dirname, '..', 'dist');

server.use(compression());

server.use(sslRedirect(['production']));

server.use(express.static(buildPath));

server.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));

const port = process.env.PORT;

server.listen(port);

// eslint-disable-next-line no-console
console.log(`Listening on port ${port}`);
