import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorComponent } from './conversor/conversor.component';
import { DolarComponent } from './dolar/dolar.component';
import { EuroComponent } from './euro/euro.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    DolarComponent,
    EuroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
