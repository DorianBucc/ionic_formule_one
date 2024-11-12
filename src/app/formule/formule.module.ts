import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormuleComponent } from './list-formule/list-formule.component';
import { DetailFormuleComponent } from './detail-formule/detail-formule.component';
import { BorderCardDirective } from './border-card.directive';
import { FormuleTypeColorPipe } from './formule-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormuleService } from './formule.service';
import { FormsModule } from '@angular/forms';
import { FormuleFormComponent } from './formule-form/formule-form.component';
import { EditFormuleComponent } from './edit-formule/edit-formule.component';
import { AddFormuleComponent } from './add-formule/add-formule.component';
import { SearchFormuleComponent } from './search-formule/search-formule.component';

const FormuleRoutes: Routes = [
  { path: "edit/formule/:id", component: EditFormuleComponent },
  { path: "formule/add", component: AddFormuleComponent },
  { path: "formules", component: ListFormuleComponent },
  { path: "formule/:id", component: DetailFormuleComponent },
];

@NgModule({
  declarations: [ListFormuleComponent, DetailFormuleComponent, BorderCardDirective, FormuleTypeColorPipe, FormuleFormComponent, EditFormuleComponent, AddFormuleComponent, SearchFormuleComponent],
  imports: [
    CommonModule, FormsModule,RouterModule.forChild(FormuleRoutes)
  ],
  providers: [FormuleService]
})

export class FormuleModule { }