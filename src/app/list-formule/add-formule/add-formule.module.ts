import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFormulePageRoutingModule } from './add-formule-routing.module';

import { AddFormuleComponent } from './add-formule.page';
import { FormuleFormPageModule } from '../formule-form/formule-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFormulePageRoutingModule,
    FormuleFormPageModule
  ],
  declarations: [AddFormuleComponent]
})
export class AddFormulePageModule {}
