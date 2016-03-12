import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { CoffeeService } from './coffee/components/coffee.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Coffee } from './coffee/components/coffee.component';
import { CoffeeJumbo } from './jumbotron/jumbotron.component';
import { CoffeeDropdown } from './coffee/components/dropdown.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app',
  directives: [Coffee, CoffeeJumbo, CoffeeDropdown],
  template: `
    <div>
      Hello coffeeplusime!
      <coffee-jumbo></coffee-jumbo>
      <coffee-dropdown></coffee-dropdown>
      <coffee></coffee>
    </div>
  `
})

class App{}

bootstrap(App, [HTTP_PROVIDERS, CoffeeService]);
