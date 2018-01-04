import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntityComponent} from './entity.component';
import {EntityDetailsComponent} from './entity-details/entity-details.component';

const routes: Routes = [
  {
    path: '',
    component: EntityComponent,
    children: [
      { path: 'details', component: EntityDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
