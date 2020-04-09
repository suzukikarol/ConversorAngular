import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService} from './currency-conversion.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Conversor Angular';

  public correncyData = []
  
  constructor(private currencyconversionservice:CurrencyConversionService) {}

  ngOnInit() {
    this.currencyconversionservice.getRates().subscribe((data) => {
      this.correncyData = Array.from(Object.keys(data),k=>data[k]);
    })
  }

  name="";
  number1="";

  clearName(){
    this.name="";
  }

  clearNum(){
    this.number1=null;
  }
}
