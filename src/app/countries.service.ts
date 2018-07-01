import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public url = 'https://restcountries.eu/rest/v2/';

  constructor(public _http: HttpClient) {}
  // error handler
  public handleError(err: HttpErrorResponse) {
    console.log('Error Handler');
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
