import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DolarComponent } from './dolar/dolar.component';
import { EuroComponent } from './euro/euro.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"dolar", component:DolarComponent},
  {path:"euro", component:EuroComponent},
  {path:"", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
