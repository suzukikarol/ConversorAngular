import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListCurrency } from './model/currency.model';


@Injectable({
  providedIn: 'root'
})

export class CurrencyConversionService {

  private apiUrl = 'https://api.exchangeratesapi.io/latest';

  dataBase
  conversionValue
  constructor(private http: HttpClient) { }

  getRates():Observable<any>{
    console.log("PASSOU!")
    return this.http.get(this.apiUrl)
  }

}
