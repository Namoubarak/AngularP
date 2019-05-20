import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerListComponent } from './ter-list/ter-list.component';

const routes: Routes = [
  {path:'terrains',component: TerListComponent}
 // ,{path:'matche'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
