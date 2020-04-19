import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//route
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import { EuroComponent } from './euro/euro.component';

//service
import { CurrencyConversionService } from './currency-conversion.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    EuroComponent
    
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
