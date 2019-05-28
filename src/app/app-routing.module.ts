import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerListComponent } from './ter-list/ter-list.component';
import { ArbitreComponent } from './arbitre/arbitre.component';
import { SaisonComponent } from './saison/saison.component';

const routes: Routes = [
  {path:'terrains',component: TerListComponent},
  {path:'arbitres',component: ArbitreComponent},
  {path:'saisons',component:SaisonComponent}
 // ,{path:'matche'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
