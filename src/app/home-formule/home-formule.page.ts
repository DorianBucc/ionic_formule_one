import { Component, OnInit } from '@angular/core';
import { Formule } from '../formule';
import { Router } from '@angular/router';
import { FormuleService } from '../formule.service';

@Component({
  selector: 'app-home-formule',
  templateUrl: './home-formule.component.html',
})
export class HomeFormuleComponent implements OnInit{
  FormuleList: Formule[] = [];

  constructor(private router: Router, private FormuleService: FormuleService){};

  ngOnInit(): void {
    this.FormuleService.getFormuleList().subscribe((FormuleList) => this.FormuleList = FormuleList);
  }
  goToFormule(Formule : Formule){
    this.router.navigate(['/formules/', Formule.id]);
  }
}