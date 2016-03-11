import { Http, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class CoffeeService {
  constructor(private http: Http) { }
  getCoffeeData() {
    return this.http.get('/api/coffee').map((res:Response) => res.json());
  }
}
