import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formule } from '../formule';
import { FormuleService } from '../formule.service';

@Component({
  selector: 'app-detail-formule',
  templateUrl: './detail-formule.component.html',
})

export class DetailFormuleComponent implements OnInit {
  formuleList: Formule[] = [];
  formule: Formule|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private formuleService: FormuleService){  }

  ngOnInit(){
    this.formuleService.getFormuleList().subscribe((formuleList) => this.formuleList = formuleList);

    const formuleId : string|null = this.route.snapshot.paramMap.get("id"); // tableau avec tous les paramètres de l'url
    if(formuleId){
      this.formuleService.getFormuleById(Number(formuleId)).subscribe((formule) => this.formule = formule);
    }
  }

  goToformulesList(){
    this.router.navigate(['/formules']);
  }

  goToEditformule(formule: Formule){
    this.router.navigate(["edit/formule/", formule.id]);
  }

  deleteformule(formule: Formule){
    this.formuleService.deleteFormule(formule.id).subscribe(() => this.goToformulesList());
  }
}
