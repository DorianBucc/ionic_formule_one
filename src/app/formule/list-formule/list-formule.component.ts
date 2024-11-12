import { Component, OnInit } from '@angular/core';
import { Formule } from '../formule';
import { Router } from '@angular/router';
import { FormuleService } from '../formule.service';

@Component({
  selector: 'app-list-formule',
  templateUrl: './list-formule.component.html',
})
export class ListFormuleComponent implements OnInit{
  FormuleList: Formule[] = [];

  constructor(private router: Router, private FormuleService: FormuleService){};

  ngOnInit(): void {
    this.FormuleService.getFormuleList().subscribe((FormuleList) => this.FormuleList = FormuleList);
  }
  goToFormule(Formule : Formule){
    this.router.navigate(['/formule/', Formule.id]);
  }
  goToFormuleAdd(){
    this.router.navigate(['/formule/add']);
  }
}