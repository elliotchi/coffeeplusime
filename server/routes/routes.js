var coffeeController = require('../controllers/coffeeController');

module.exports = function(router) {
  router.get('/', coffeeController.getAllCoffee);
  
  router.get('/:method', coffeeController.getOneCoffeeMethod);
}