import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent implements OnInit {

  result: number = 0;
  valorDigitado:any;

  constructor() { }

  ngOnInit(): void {
  }

  pegaValor(event) {
    this.valorDigitado = event.target.value
    this.valorDigitado = Number(this.valorDigitado)
    this.result = this.valorDigitado * 5.67
  }

  clearNum(){
    this.valorDigitado=null;
  }

}
