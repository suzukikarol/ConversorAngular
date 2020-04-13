import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversionComponent } from './conversion/conversion.component';
import { EuroComponent } from './euro/euro.component';

const routes: Routes = [
  {path:"conversion",component:ConversionComponent},
  {path:"euro",component:EuroComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ConversionComponent, EuroComponent]