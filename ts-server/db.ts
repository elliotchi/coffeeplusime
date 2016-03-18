import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird;

export const db = mongoose.connect(process.env.PROD_MONGODB);

const coffeeSchema = new mongoose.Schema({
  brewMethod: String,
  beanRatio: Number,
  caffeinePerCup: Number,
  instructions: String
});

export const Coffee = mongoose.model('coffee', coffeeSchema, 'coffee');
