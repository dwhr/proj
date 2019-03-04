import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegComponent} from './reg/reg.component';
import {CompleteListComponent} from './complete-list/complete-list.component';
const routes: Routes = [
  {path:'list',component:CompleteListComponent
    ,
    children:[
  {path:'reg',component:RegComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
