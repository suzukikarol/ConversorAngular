import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  result: number = 0;
  valorDigitado: number;

  constructor(private conversion: CurrencyConversionService) { }

  ngOnInit(): void {
  }

  // pegaValor(event){
  //   this.valorDigitado = event.target.value;
  //   let resultado = this.valorDigitado;
  //   this.result = Number(resultado)
  //   this.result = this.valorDigitado * this.conversion.conversionValue;
  // }

  // trocaValor(event){
  //   let resultado = this.valorDigitado
  //   this.result = Number(resultado)
  //   this.result = this.valorDigitado * this.conversion.conversionValue
  // }

  valorReal:number = 3.74;
  numResult:number;
  realDolar:number;

  enviaReal(event){
    this.valorDigitado = event.target.value;
    let resultado = this.valorDigitado;
    this.numResult = Number(resultado);
    this.numResult = this.numResult / this.valorReal;
  }

  enviaDolar(event){
    this.valorDigitado = event.target.value;
    let resultado = this.valorDigitado;
    this.realDolar = Number(resultado);
    this.realDolar = this.realDolar * this.valorReal;
  }
}
