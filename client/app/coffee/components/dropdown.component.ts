import { Component, Output, EventEmitter } from 'angular2/core';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'coffee-dropdown',
  template: `
  <div>
    <select #sel (change)="select.emit(sel.value)">
      <option *ngFor="#brewMethod of coffeeDropdown">
      {{brewMethod.brewMethod}}
      </option>
    </select>
  </div>
  `
})

export class CoffeeDropdown {
  @Output() select = new EventEmitter();

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