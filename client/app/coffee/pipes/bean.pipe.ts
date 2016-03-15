import { Pipe } from 'angular2/core';

@Pipe({
  name: 'beanAmount'
})

export class BeanAmountPipe {
  transform(value, [cupAmount]) {
    return value.beanRatio * cupAmount;
  }
}