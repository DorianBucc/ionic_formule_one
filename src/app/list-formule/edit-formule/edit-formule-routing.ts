import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFormulePage } from './edit-formule.page'

const routes: Routes = [
  {
    path: '',
    component: EditFormulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFormulePageRoutingModule {}
