import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  constructor(private conversion: CurrencyConversionService) { }

  private resultSet:any = {};

  ngOnInit()
  {
    this.conversion.getRates().subscribe(data => this.resultSet = data);
    console.log(this.resultSet.base);
  }

  calcValue(event) {
    let result = event.target.value
    return this.conversion.conversionValue = result
  } 

}
