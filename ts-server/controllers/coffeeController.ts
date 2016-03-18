import { db, Coffee } from '../db';

export default {
  getAllCoffee: (req, res) => {
    Coffee.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  
  getOneCoffeeMethod: (req, res) => {
    Coffee.find({brewMethod: req.params.method})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.error(err);
      });
  }
}