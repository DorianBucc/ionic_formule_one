import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFormuleComponent } from './list-formule.page';

const routes: Routes = [
  {
    path: '',
    component: ListFormuleComponent
  },
  {
    path: 'add',
    loadChildren: () => import('./add-formule/add-formule.module').then( m => m.AddFormulePageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit-formule/edit-formule.module').then( m => m.EditFormulePageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./detail-formule/detail-formule.module').then( m => m.DetailFormulePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFormulePageRoutingModule {}
