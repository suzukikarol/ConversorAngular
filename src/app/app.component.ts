import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conversor Angular';

  name="";
  number1="";

  clearName(){
    this.name=""
  }
}
