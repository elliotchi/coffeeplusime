import { Component } from 'angular2/core';
import { CoffeeService } from '../services/coffee.service';
import { CoffeePipe } from '../pipes/coffee.pipe';

@Component({
  selector: 'coffee',
  pipes: [CoffeePipe],
  template: `
    <ul>
      <li *ngFor="#coffee of coffee">{{coffee | json}}</li>
    </ul>
  `
})

export class Coffee {
  
  public coffee;
  public coffee_error;
  
  constructor(private coffeeService: CoffeeService) {}
  
  getCoffeeData() {
    this.coffeeService.getCoffeeData()
      .subscribe(
        data => { this.coffee = data; console.log(this.coffee)},
        err => { this.coffee_error = true; }
        
      );
  }
  
  ngOnInit() {
    this.getCoffeeData();
  }
}
