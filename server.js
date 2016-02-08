var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 3000;

app.set('port', PORT);
  
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname +'/client'));

// app.get('/api/coffee', function(req, res){

// })
app.use(bodyParser.json());

app.post('/api/coffee', function(req, res){
  var readFile = Promise.promisify(fs.readFile);
  readFile('data.json')
    .then(function(contents){
      if(contents){
        res.send(contents);
      }
    });
});

app.get('/api/coffee', function(req, res){
  var readFile = Promise.promisify(fs.readFile);
  readFile('data.json')
    .then(function(allData){
      res.send(allData);
    });
});

app.use(function(error, req, res, next){
  console.error(error.stack);
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(500).send({error: error.message});
});

// require('./server/entryRoute.js')(entryRouter);


app.listen(PORT);
console.log('server listening on ', PORT);