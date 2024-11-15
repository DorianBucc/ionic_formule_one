import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormuleFormComponent } from './formule-form.page'

const routes: Routes = [
  {
    path: '',
    component: FormuleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormuleFormPageRoutingModule {}
