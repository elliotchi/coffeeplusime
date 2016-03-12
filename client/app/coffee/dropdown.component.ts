import { Component } from 'angular2/core';
import { CoffeeService } from './coffee.service';

@Component({})

export class CoffeeDropdown {
  public coffeeDropdown;
  public selectedBrewType;
  public coffeeInformation;
  
  constructor(private coffeeService: CoffeeService) {}
  
  getCoffeeData() {
    this.coffeeService.getCoffeeData()
      .subscribe(
        data => { this.coffeeDropdown = data; },
        err => { console.error(err); }
      );
  }
  
  selectBrewMethod() {
    this.coffeeService.selectBrewMethod(this.selectedBrewType)
      .subscribe(
        data => { this.coffeeInformation = data; },
        err => { console.error(err); }
      );
  }
  
  ngOnInit() {
    this.getCoffeeData();
  }
}