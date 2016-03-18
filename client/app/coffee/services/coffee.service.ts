import { Http, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
// only need for webpack dev server

@Injectable()

export class CoffeeService {
  constructor(private http: Http) {}
  
  getCoffeeData() {
    // will take for final
    return this.http.get(`http://localhost:3000/api/coffee`).map((res: Response) => res.json());
  }
  
  selectBrewMethod(brewMethod) {
    return this.http.get(`http://localhost:3000/api/coffee/${brewMethod}`).map((res: Response) => res.json());
  }
}
