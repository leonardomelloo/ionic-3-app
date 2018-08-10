import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  getLatestMovie(){

  return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=e955cbdba520bac5a4af74b2730bd9c1");
}
}

