import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConvertResultModel } from './model/currency.model';


@Injectable({
  providedIn: 'root'
})

export class CurrencyConversionService {

  private apiUrl = 'https://api.exchangeratesapi.io/latest';

  dataBase
  conversionValue
  constructor(private http: HttpClient) { }

  getRates():Observable<ConvertResultModel>{
    return this.http.get<ConvertResultModel>(this.apiUrl)
  }

}
