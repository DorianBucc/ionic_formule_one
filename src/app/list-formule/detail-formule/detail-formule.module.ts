import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFormulePageRoutingModule } from './detail-formule-routing.module';

import { DetailFormuleComponent } from './detail-formule.page';
import { SharedModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFormulePageRoutingModule,
    SharedModule
  ],
  declarations: [DetailFormuleComponent],
  exports: [DetailFormuleComponent],
})
export class DetailFormulePageModule {}
