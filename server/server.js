var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./db').db;
var Coffee = require('./db').Coffee;
var cors = require('cors');
var app = express();

var PORT = process.env.PORT || 3000;

app.set('port', PORT);
  
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/', express.static(path.join(__dirname, '../dist')));

// app.get('/api/coffee', function(req, res){

// })
app.use(bodyParser.json());

app.get('/api/coffee/:method', function(req, res){
  // var readFile = Promise.promisify(fs.readFile);
  // readFile('data.json')
  //   .then(function(contents){
  //     if(contents){
  //       res.send(contents);
  //     }
  //   });
  Coffee.find({brewMethod: req.params.method})
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.error(err);
    });
  // , function(err, allData) {
  //   if (allData) {
  //     res.send(allData);
  //   }
  // });
});

app.get('/api/coffee', function(req, res){
  Coffee.find({})
    .then(function(allData) {
      res.send(allData);
    })
    .catch(function(err) {
      console.error(err);
    });
   // , function(err, allData) {
  //   res.send(allData);
  // })
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