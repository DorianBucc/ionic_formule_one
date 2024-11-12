import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditFormuleComponent } from './formule/edit-formule/edit-formule.component';

const routes: Routes = [
  { path: "", redirectTo: 'formules', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent }
// opérateur pour récupérer absolument tous les chemins, à déclarer en dernier pour éviter les problèmes, puisque le router d'angular lit les routes du haut vers le bas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
