import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import { NavegationComponent } from './navegation/navegation.component';
import { EuroComponent } from './euro/euro.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    NavegationComponent,
    EuroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
