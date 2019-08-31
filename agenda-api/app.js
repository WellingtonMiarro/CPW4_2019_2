const express = require('express');

const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasContatos= require('./routes/Contatos');

const app = express();

app.use(logger('dev'));


app.use(cors());


app.use(bodyParser.json());


app.use('/contatos',rotasContatos);

module.exports = app;