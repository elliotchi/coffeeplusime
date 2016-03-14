import { Component, Input } from 'angular2/core';
import { CoffeePipe } from '../pipes/coffee.pipe';

@Component({
  selector: '',
  template: ``
})

export class CoffeeInformation {
  @Input() status;
  
  constructor() {}
}