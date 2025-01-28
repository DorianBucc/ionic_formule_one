import { Injectable } from '@angular/core';
import { Formule } from './formule';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormuleService {
  // private DNS = "http://localhost:3000"
  private DNS = "https://service.ionic.projetu.fr"

  private types: string[] = [""];

  constructor(private http: HttpClient){
    this.http.get<string[]>(this.DNS+`/formule/types`).subscribe( 
      (response) => {this.types = response},
      (error) => {this.types = ["error"]}
    );
    
  }

  getFormuleList(): Observable<Formule[]>{
    return this.http.get<Formule[]>(this.DNS+'/formule').pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  getFormuleById(FormuleId: number): Observable<Formule|undefined>{
    return this.http.get<Formule>(this.DNS+`/formule/list/${FormuleId}`).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  searchFormuleList(term: string): Observable<Formule[]>{
    if(term.length <= 1){
      return of([]);
    }

    return this.http.get<Formule[]>(this.DNS+`/Formule/search/${term}`).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    )
  } 

  updateFormule(Formule: Formule): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.DNS+'/Formule/push/'+Formule.id, Formule, httpOptions).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  addFormule(Formule: Formule): Observable<Formule>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Formule>(this.DNS+'/Formule/add/', Formule, httpOptions).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  deleteFormule(FormuleId: number): Observable<null>{
    return this.http.delete(this.DNS+`/Formule/delete/${FormuleId}`).pipe(
      // tap((response) => this.log(response)), // appel à la fonction log pour éviter la répetition de code
      catchError((error) => this.handleError(error, [])) // tap -> équivalent à un console.log mais adapter à des observables
    );
  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

  getFormuleTypeList(): string[]{ //Observable<string[]>
    // this.http.get<string[]>(`http://localhost:3000/formule/types`).subscribe( 
    //   (response) => {this.types = response; return response},
    //   (error) => {this.types = ["error"]}
    // );
    return this.types;
  }
}
