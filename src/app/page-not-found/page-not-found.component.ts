import { Component } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="https://media.ouest-france.fr/v1/pictures/MjAyNDAyYjFmMGI3OTUyNDA1NTk1MTBkM2YxZGI1NTc4MDJlNjk?width=630&height=354&focuspoint=48%2C42&cropresize=1&client_id=bpeditorial&sign=1cf320da9a9521598a5ecdea855141431304b185deaa9e39474cac8195a929a6"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a (click)="goToFormulesList()" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})

export class PageNotFoundComponent { 
  constructor(private router: Router){};

  goToFormulesList(){
    this.router.navigate(['/formules']);
  }
}