import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CurrencyConversionService {

  private apiUrl = "https://api.exchangeratesapi.io/latest?=base=BRL";

  dataBase
  conversionValue
  constructor(private http: HttpClient) { }

  getRates(){
    console.log("funciona")
    return this.http.get(this.apiUrl)
  }

}
