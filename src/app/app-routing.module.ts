import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: TabComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'formules',
          },
          {
            path: 'photos',
            loadChildren: () => import('./photos/photos.module').then((m) => m.PhotosPageModule),
          },
          {
            path: 'formules',
            loadChildren: () => import('./list-formule/list-formule.module').then((m) => m.ListFormulePageModule),
          }
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
