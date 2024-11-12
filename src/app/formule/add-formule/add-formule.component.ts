import { Component, OnInit } from '@angular/core';
import { Formule } from '../formule';

@Component({
  selector: 'app-add-formule',
  template: `
    <h2 class="center">Ajouter une Formule 1</h2>
    <app-formule-form [Formule]="formule"></app-formule-form>
  `,
})

export class AddFormuleComponent implements OnInit{
  formule! : Formule;

  ngOnInit(): void {
      this.formule = new Formule;
  }
}
