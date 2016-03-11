var db = require('../db').db;
var Coffee = require('../db').Coffee;

module.exports = {
  getAllCoffee: function(req, res) {
    Coffee.find({})
      .then(function(data) {
        res.send(data);
      })
      .catch(function(err) {
        console.error(err);
      });
  },
  
  getOneCoffeeMethod: function(req, res) {
    Coffee.find({brewMethod: req.params.method})
      .then(function(data) {
        res.send(data);
      })
      .catch(function(err) {
        console.errror(err);
      });
  }
  
}