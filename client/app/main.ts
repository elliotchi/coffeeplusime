import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { CoffeeService } from './coffee/coffee.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Coffee } from './coffee/coffee.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app',
  directives: [Coffee],
  template: `
    <div>
      Hello coffeeplusime!
      <coffee></coffee>
    </div>
  `
})

class App{}

bootstrap(App, [HTTP_PROVIDERS, CoffeeService]);
