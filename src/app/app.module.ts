import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import { NavegationComponent } from './navegation/navegation.component';
import { EuroComponent } from './euro/euro.component';

import { CurrencyConversionService } from './currency-conversion.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    NavegationComponent,
    EuroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CurrencyConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
