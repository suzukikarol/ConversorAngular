import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent implements OnInit {

  result: number = 0;
  real

  constructor() { }

  ngOnInit(): void {
  }

  pegaValor(event) {
    this.real = event.target.value
    this.real = Number(this.real)
    this.result = this.real * 5.67
  }

}
