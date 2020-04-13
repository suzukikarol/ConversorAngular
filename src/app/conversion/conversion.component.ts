import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  valueMoney: number = 0;
  real: number = 0;

  constructor(private conversion: CurrencyConversionService) { }

  ngOnInit(): void {
  }

  pegaValor(event){
    this.real = event.target.value
    this.valueMoney = this.real * this.conversion.conversionValue
  }

  trocaValor(){
    this.valueMoney = this.real
    this.real = this.real * this.conversion.conversionValue
  }

}
