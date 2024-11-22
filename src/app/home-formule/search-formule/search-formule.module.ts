import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFormulePageRoutingModule } from './search-formule-routing.module';

import { SearchFormuleComponent } from './search-formule.page';
import { SharedModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFormulePageRoutingModule,
    SharedModule
  ],
  declarations: [SearchFormuleComponent],
  exports: [SearchFormuleComponent]
})
export class SearchFormulePageModule {}
