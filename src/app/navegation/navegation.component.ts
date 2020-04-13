import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';


@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  public conversionData
  entries: any
  moneys: any;
  rates: any;
  counter: number = 5;

  constructor(private conversion: CurrencyConversionService) { }

  ngOnInit(): void {
    this.conversion.getRates().subscribe((data) => {
      this.conversionData = new Object(data);
      this.entries = Object.entries(this.conversionData.rates);
      this.moneys = Object.keys(this.conversionData.rates);
      this.rates = Object.values(this.conversionData.rates);
    })
  }

  calcValue(event) {
    let result = event.target.value
    return this.conversion.conversionValue = result
    // console.log(event.target.value)
  } 

}
