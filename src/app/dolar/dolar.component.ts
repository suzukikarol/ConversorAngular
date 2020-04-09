import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  vDolar: number = 5.24;
  nResult: number;
  dolarRes:number;

  cDolarReal(event){
    let result = event.target.value;
    this.nResult = Number(result);
    this.nResult = this.nResult * this.vDolar;
  }

  cRealDolar(event){
    let result = event.target.value;
    this.dolarRes = Number(result);
    this.dolarRes = this.dolarRes / this.vDolar;
  }
  
}
