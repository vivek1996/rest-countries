import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public url = 'https://restcountries.eu/rest/v2';

  constructor(public _http: HttpClient) {}
  // error handler
  public handleError(err: HttpErrorResponse) {
    console.log('Error Handler');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // Get all countries
  public getAllCountries(region: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this._http.get(
      `${
        this.url
      }/region/${region}?fields=name;capital;currencies;timezones;alpha3Code;flag;timezones;languages;subregion`
    );
  }
  // get single country
  public getSingleCountry(country: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this._http.get(
      `${
        this.url
      }/alpha/${country}?fields=name;capital;currencies;subregion;timezones;alpha3Code;population;area;flag;topLevelDomain;alpha2Code;altSpellings;region;borders;nativeName;languages;callingCodes`
    );
  }
  // get countries by currency
  public getCountriesByCurrency(currency: string): Observable<any> {
    return this._http.get(
      `${
        this.url
      }/currency/${currency}?fields=name;capital;currencies;subregion;timezones;alpha3Code;population;area;latlng;flag;topLevelDomain;alpha2Code;altSpellings;region;borders;nativeName;languages;callingCodes`
    );
  }
  //  get countries by language
  public getCountriesByLanguage(lang: string): Observable<any> {
    return this._http.get(
      `${
        this.url
      }/lang/${lang}?fields=name;capital;currencies;subregion;timezones;alpha3Code;population;area;latlng;flag;topLevelDomain;alpha2Code;altSpellings;region;borders;nativeName;languages;callingCodes`
    );
  }
  // get country by name
  public getCountriesByName(country: string): Observable<any> {
    return this._http.get(
      `${
        this.url
      }/name/${country}?fields=name;capital;currencies;subregion;timezones;alpha3Code;population;area;flag;topLevelDomain;alpha2Code;altSpellings;region;borders;nativeName;languages;callingCodes`
    );
  }
}
