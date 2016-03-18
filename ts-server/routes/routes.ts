import coffeeController from '../controllers/coffeeController';

export default router => {
  router.get('/', coffeeController.getAllCoffee);
  
  router.get('/:method', coffeeController.getOneCoffeeMethod);
}