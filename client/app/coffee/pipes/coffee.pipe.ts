import { Pipe } from 'angular2/core';

@Pipe({
  name: 'coffee'
})

export class CoffeePipe {
  transform(value, [brewMethod]) {
    // console.log(value);
    return value.filter(item => item.brewMethod === brewMethod);
  }
}
