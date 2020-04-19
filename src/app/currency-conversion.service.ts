import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.exchangeratesapi.io/latest?=';
@Injectable({
  providedIn: 'root'
})

export class CurrencyConversionService {

  public base:any;

  constructor(private http: HttpClient) { }

  getRates(){
    return this.http.get(apiUrl + this.base)
  }

}
