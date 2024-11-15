import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFormuleComponent } from './add-formule.page';

const routes: Routes = [
  {
    path: '',
    component: AddFormuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFormulePageRoutingModule {}
