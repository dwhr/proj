import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { CompleteListComponent } from './complete-list/complete-list.component';
import { EditingComponent } from './editing/editing.component';
const routes: Routes = [
  {path : 'list', component : CompleteListComponent},
  {path :'reg', component : RegComponent},
  {path : 'edit/:id', component : EditingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
