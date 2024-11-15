import { Component, OnInit } from '@angular/core';
import { Formule } from '../../formule';

@Component({
  selector: 'app-add-formule',
  templateUrl: './add-formule.html',
})

export class AddFormuleComponent implements OnInit{
  formule! : Formule;

  ngOnInit(): void {
      this.formule = new Formule;
  }
}
