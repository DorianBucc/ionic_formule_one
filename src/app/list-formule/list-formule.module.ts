import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFormulePageRoutingModule } from './list-formule-routing.module';

import { ListFormuleComponent } from './list-formule.page';
import { SearchFormulePageModule } from './search-formule/search-formule.module';
import { SharedModule } from '../share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFormulePageRoutingModule,
    SearchFormulePageModule,
    SharedModule
  ],
  declarations: [
    ListFormuleComponent,
  ]
})
export class ListFormulePageModule {}
