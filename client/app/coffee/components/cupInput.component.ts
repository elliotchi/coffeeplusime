import { Component, Output } from 'angular2/core';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'cup-input',
  template: `
  <div>
    <form (submit)="onSubmit()">
      <input type="text" [(ngModel)]="cupInput">
    </form>
  </div>
  `
})

export class CupInput {
  public cupAmount;
  // @Output() cup = this.cupAmount;
  
  constructor(private coffeeService: CoffeeService) {}
  
  onSubmit() {
    console.log('hi');
  }
}