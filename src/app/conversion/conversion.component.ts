import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  valueInput: number;
  valueInputReverse: number;
  result: number;
  resultReverse: number;
  valueCurrency: number;
  initials: string = "GBP";
  guardaData: any;
  bases = ['GBP', 'USD', 'EUR', 'JPY'];
  valores = []

  constructor(private conversion: CurrencyConversionService) { }

  ngOnInit() {
    for (let i in this.bases) {
      this.conversion.base = this.bases[i]
      this.conversion.getRates().subscribe(
        (resp) => {
          this.guardaData = new Object(resp)
          this.valores.push(this.guardaData.rates.BRL)
        });
      }
  }

  saveValue(event) {
    this.valueInput = Number(event.target.value);
    this.result = this.valueInput * this.valueCurrency;
  }

  saveValueReverse(event) {
    this.valueInputReverse = Number(event.target.value);
    this.resultReverse = this.valueInputReverse / this.valueCurrency;
  }

   calcula(event) {
    let eventTitle = event.target.title;
    this.conversion.base = eventTitle
    this.conversion.getRates().subscribe(
      (resposta) => {
        this.guardaData = new Object(resposta)
        this.valueCurrency = this.guardaData.rates.BRL;
        this.result = 1;
        this.resultReverse = this.valueCurrency;
      }
    )
    switch (eventTitle) {
      case 'GBP': this.initials = "GBP";
        break;
      case 'USD': this.initials = "USD";
        break;
      case 'EUR': this.initials = "EUR";
        break;
      case 'JPY': this.initials = "JPY";
    }  
   }
}
