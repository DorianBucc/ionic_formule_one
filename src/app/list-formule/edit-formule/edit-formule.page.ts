import { Component, OnInit } from '@angular/core';
import { Formule } from '../../formule';
import { ActivatedRoute } from '@angular/router';
import { FormuleService } from '../../formule.service';

@Component({
  selector: 'app-edit-formule',
  templateUrl: './edit-formule.html'
})
export class EditFormulePage implements OnInit{
  formule!: Formule;
  constructor(private route: ActivatedRoute, private formuleService: FormuleService){}


  ngOnInit(): void {
    const formuleId : string|null = this.route.snapshot.paramMap.get("id"); // tableau avec tous les paramètres de l'url
    if(formuleId){
      this.formuleService.getFormuleById(Number(formuleId)).subscribe((formule) => {
        if(formule != undefined )this.formule = formule;
        else this.formule = new Formule();
    });
    }
  }
}