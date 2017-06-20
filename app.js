'use strict';

var express = require('express'); 
var path = require('path');
var cookieParser = require('cookie-parser'); 
var bodyParser = require('body-parser'); 
var routesConfig = require('./routes/routesConfig'); 
var morgan = require('morgan'); 
var config = require('./common/config');

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

process.env.ENVIROMENT = 'dev';

app.set('superSecret', config.secret);

routesConfig.init(app); 

module.exports = app;