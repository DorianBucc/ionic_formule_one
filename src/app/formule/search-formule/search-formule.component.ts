import { Component, OnInit } from '@angular/core';
import { Formule } from '../formule';
import { FormuleService } from '../formule.service';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-formule',
  templateUrl: './search-formule.component.html',
  styles: ``
})
export class SearchFormuleComponent implements OnInit{
  searchTerms = new Subject<string>(); // représente le flux de données de l'utilisateur dans la barre de recherche
  // exemple -> {..."a"..."ab"..."abz"..."ab"..."abo"...} -> exemple de texte que l'utilisateur écrit en temps réel
  Formules$!: Observable<Formule[]>; // le $ permet d'indiquer que c'est un observable de flux de données (pas obligatoire)
  // {...FormuleList(a)...FormuleList(ab)...FormuleList(abz)...FormuleList(ab)...FormuleList(abo)...}

  constructor(private router: Router, private FormuleService: FormuleService){}

  ngOnInit(): void {
    this.Formules$ = this.searchTerms.pipe(
      // {..."a"."ab"..."abz"."ab"..."abo"...}
      debounceTime(300),
      // {..."ab"..."ab"..."abo"...}
      distinctUntilChanged(),
      // {..."ab".........."abo"...}
      switchMap((term) => this.FormuleService.searchFormuleList(term))
      // {...FormuleList(ab)..........FormuleList(abo)...}
    )
  }

  search(term: string){
    this.searchTerms.next(term); // pousser tous les caractères que l'utilisateur entre dans la barre de recherche
  }

  goToDetail(Formule: Formule){
    this.router.navigate(['/formule/', Formule.id]);
  }
}
