import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeFormulePageRoutingModule } from './home-formule-routing.module';

import { HomeFormuleComponent } from './home-formule.page';
import { SearchFormulePageModule } from './search-formule/search-formule.module';
import { SharedModule } from '../share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeFormulePageRoutingModule,
    SearchFormulePageModule,
    SharedModule
  ],
  declarations: [
    HomeFormuleComponent,
  ]
})
export class HomeFormulePageModule {}
