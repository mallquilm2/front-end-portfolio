import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Person/add/add.component';
import { EditComponent } from './Person/edit/edit.component';
import { GetListComponent } from './Person/get-list/get-list.component';

const routes: Routes = [
  {path:'getList', component:GetListComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
