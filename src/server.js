const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');

const server = express();

const routes = require('./routes');

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333);