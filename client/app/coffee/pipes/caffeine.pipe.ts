import { Pipe } from 'angular2/core';

@Pipe({
  name: 'caffeine'
})

export class CaffeinePipe {
  transform(value, [cupAmount]) {
    return value.caffeinePerCup * cupAmount;
  }
}