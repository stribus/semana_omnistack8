const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


mongoose.connect('mongodb://localhost:27017/tindev?retryWrites=true&w=majority',{useNewUrlParser:true});

const server = express();
server.use(express.json());
server.use(routes);


server.listen(3333);