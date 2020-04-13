import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  public conversionData
  entries: any
  moneys: any;
  rates: any;

  constructor(private conversion: CurrencyConversionService) { }

  ngOnInit(): void {
    this.conversion.getRates().subscribe((data) => {
      this.conversionData = new Object(data);
      this.entries = Object.entries(this.conversionData.rates);
      this.moneys = Object.keys(this.conversionData.rates);
      this.rates = Object.values(this.conversionData.rates);
    console.log("AQUI!")
    })
  }

  calcValue(event) {
    let result = event.target.value
    return this.conversion.conversionValue = result
  } 

}
