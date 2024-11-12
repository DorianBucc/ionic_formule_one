import { Component, Input, OnInit } from '@angular/core';
import { FormuleService } from '../formule.service';
import { Formule } from '../formule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formule-form',
  templateUrl: './formule-form.component.html',
  styleUrls: ['./formule-form.component.css'],
})

export class FormuleFormComponent implements OnInit {
  @Input() Formule! : Formule;
  @Input() year : string = "xxxx";
  types: string[] = [];
  isAddForm: boolean = false;
  constructor(private FormuleService: FormuleService, private router: Router){ }
  
  ngOnInit(): void {
   this.types = this.FormuleService.getFormuleTypeList();
   this.isAddForm = this.router.url.includes("add");
   if (this.Formule.types.length !== 0) {
    this.year = this.Formule.types[this.Formule.types.length - 1];
    }
  }

  // Méthode pour valider si une année est sélectionnée
  isYearValid(): boolean {
    // Vérifie si 'year' est une année valide avec 4 chiffres
    return /^[0-9]{4}$/.test(this.year);
  }

  hasType(type: string): boolean{ // méthode permettant de savoir si le pokémon possède déjà le type sélectionné et donc cocher/décocher certains types
    return this.Formule.types.includes(type);
  }

  selectType($event: Event, type: string){ // méthode pour ajouter et supprimer les types d'un pokémon
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.Formule.types = [type,this.year];
    }else {
      const index = this.Formule.types.indexOf(type);
      this.Formule.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean{
    if(this.Formule.types.length == 1 && this.hasType(type)){
      return false;
    }
    if(this.Formule.types.length > 2 && !this.hasType(type)){
      return false;
    }


    return true;
  }

  onSubmit(){ // méthode pour valider la modification
    if(this.isAddForm){
      this.FormuleService.addFormule(this.Formule).subscribe((Formule: Formule) => this.router.navigate(['/formules/'])); // l'id vient du serveur quand on ajoute un nouveau pokémon
    }else {
      this.FormuleService.updateFormule(this.Formule).subscribe(() => this.router.navigate(['/formules/']));
    }
  }
}
