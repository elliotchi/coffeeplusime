import { Component } from 'angular2/core';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'coffee',
  template: `
    <ul>
      <li *ngFor="#coffee of coffee">{{coffee.brewMethod}}</li>
    </ul>
  `
})
export class Coffee {
  
  public coffee;
  public coffee_error;
  
  constructor(private coffeeService: CoffeeService) { }
  
  getCoffeeData() {
    this.coffeeService.getCoffeeData()
      .subscribe(
        data => { this.coffee = data; },
        err => { this.coffee_error = true; }
        
      );
  }
  
  ngOnInit() {
    this.getCoffeeData();
  }
}

export const poop = function(){}