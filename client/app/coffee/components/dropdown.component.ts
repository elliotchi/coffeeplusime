import { Component, Output, EventEmitter } from 'angular2/core';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'coffee-dropdown',
  template: `
  <div>
    <select [(ngModel)]="selectedBrewType" (change)="selectBrewMethod()">
      <option *ngFor="#brewMethod of coffeeDropdown" [value]="brewMethod.brewMethod">
      {{brewMethod.brewMethod}}
      </option>
    </select>
  </div>
  
  <div *ngIf="!!coffeeInformation">
    {{coffeeInformation | json }}
  </div>
  `
})

export class CoffeeDropdown {
  // @Output() select = new EventEmitter();

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
      
      console.log(this.coffeeInformation[0]["beanRatio"]);
  }
  
  ngOnInit() {
    this.getCoffeeData();
  }
}