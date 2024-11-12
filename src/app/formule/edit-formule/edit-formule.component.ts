import { Component, OnInit } from '@angular/core';
import { Formule } from '../formule';
import { ActivatedRoute } from '@angular/router';
import { FormuleService } from '../formule.service';

@Component({
  selector: 'app-edit-formule',
  template: `
      <h2 class="center">Editer {{ Formule?.name }}</h2>
    <p *ngIf="Formule" class="center">
      <img [src]="Formule.picture">
    </p>
    <app-formule-form *ngIf="Formule" [Formule]="Formule"></app-formule-form>
  `,
  styles: ``
})
export class EditFormuleComponent implements OnInit{
  Formule: Formule|undefined;
  constructor(private route: ActivatedRoute, private formuleService: FormuleService){}

  ngOnInit(): void {
    const formuleId : string|null = this.route.snapshot.paramMap.get('id');
    if(formuleId){
      this.formuleService.getFormuleById(Number(formuleId)).subscribe((Formule) => this.Formule = Formule);
    }else {
      this.Formule = undefined;
    }
  }
}
