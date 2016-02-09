var mongoose = require('mongoose');
require('dotenv').config()

var db = mongoose.connect(process.env.PROD_MONGODB);
var coffeeSchema = new mongoose.Schema({
  brewMethod: String,
  beanRatio: Number,
  caffeinePerCup: Number,
  instructions: String
});

var Coffee = mongoose.model('coffee', coffeeSchema, 'coffee');

module.exports = {
  db: db,
  Coffee: Coffee
}