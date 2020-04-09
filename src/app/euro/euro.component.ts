import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueEuro:number = 5.75;
  numberResult:number;
  realEuroRes:number;

  calcEuroReal(event){
    let result = event.target.value
    this.numberResult = Number(result);
    this.numberResult = this.numberResult * this.valueEuro;
  }

  calcRealEuro(event){
    let result = event.target.value
    this.realEuroRes = Number(result);
    this.realEuroRes = this.realEuroRes / this.valueEuro;
  }

}
