import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFormulePage } from './edit-formule.page';
import { SharedModule } from 'src/app/share.module';
import { FormuleFormPageModule } from '../formule-form/formule-form.module';
import { EditFormulePageRoutingModule } from './edit-formule-routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFormulePageRoutingModule,
    FormuleFormPageModule,
    SharedModule
  ],
  declarations: [EditFormulePage],
  exports: [EditFormulePage],
  
})
export class EditFormulePageModule {}
