import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerListComponent } from './ter-list/ter-list.component';
import { ArbitreComponent } from './arbitre/arbitre.component';

const routes: Routes = [
  {path:'terrains',component: TerListComponent},
  {path:'arbitres',component: ArbitreComponent}
 // ,{path:'matche'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
