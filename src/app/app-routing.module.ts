import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversionComponent } from './conversion/conversion.component';

const routes: Routes = [
  {path:"conversion",component:ConversionComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ConversionComponent]