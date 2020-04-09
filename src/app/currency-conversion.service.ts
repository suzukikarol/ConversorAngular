import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CurrencyConversionService {

  private apiUrl = "https://api.exchangeratesapi.io/latest";

  constructor(private http:HttpClient) { }

  getRates(){
    return this.http.get(this.apiUrl)
  }
  

}
