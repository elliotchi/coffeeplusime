import { Http, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
// only need for webpack dev server

@Injectable()

export class CoffeeService {
  constructor(private http: Http) {}
  
  getCoffeeData() {
    // will take for final
    return this.http.get(`/api/coffee`).map((res: Response) => res.json());
  }
  
  selectBrewMethod(brewMethod) {
    return this.http.get(`/api/coffee/${brewMethod}`).map((res: Response) => res.json());
  }
}
