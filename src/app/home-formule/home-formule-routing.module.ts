import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFormuleComponent } from './home-formule.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFormuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFormulePageRoutingModule {}
