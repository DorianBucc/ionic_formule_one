import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailFormuleComponent } from './detail-formule.page';

const routes: Routes = [
  {
    path: '',
    component: DetailFormuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailFormulePageRoutingModule {}
