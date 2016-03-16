var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('../db').db;
var compression = require('compression');
// cors for webpack-dev-server
var cors = require('cors');

module.exports = function (app) {
  app.use(compression());
  var router = express.Router();
  
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  
  // for webpack-dev-server cross origin
  app.use(cors());
 
  app.use('/api/coffee', router);
  require('../routes/routes')(router);
  
  app.use(express.static(path.join(__dirname, '../../dist')));
  
  app.use('/styles', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist')));
  
}