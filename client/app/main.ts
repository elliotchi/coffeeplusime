import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { CoffeeService } from './coffee/coffee.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Coffee } from './coffee/coffee.component';
import { CoffeeJumbo } from './jumbotron/jumbotron.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app',
  directives: [Coffee, CoffeeJumbo],
  template: `
    <div>
      Hello coffeeplusime!
      <coffee-jumbo></coffee-jumbo>
      <coffee></coffee>
    </div>
  `
})

class App{}

bootstrap(App, [HTTP_PROVIDERS, CoffeeService]);
