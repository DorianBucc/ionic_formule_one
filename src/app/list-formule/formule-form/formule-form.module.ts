import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormuleFormPageRoutingModule } from './formule-form-routing.module';

import { FormuleFormComponent } from './formule-form.page';
import { ListFormulePageRoutingModule } from '../list-formule-routing.module';
import { SharedModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormuleFormPageRoutingModule,
    ListFormulePageRoutingModule,
    SharedModule
  ],
  declarations: [FormuleFormComponent],
  exports: [FormuleFormComponent],
  
})
export class FormuleFormPageModule {}
