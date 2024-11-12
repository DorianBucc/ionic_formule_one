import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormuleModule } from './formule/formule.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, FormuleModule, AppRoutingModule], // faire attention aux importations car cela peut changer l'ordre des routes dans les modules
  providers: [provideClientHydration(),provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})

export class AppModule { }