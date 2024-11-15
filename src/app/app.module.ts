import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabComponent } from './tab/tab.component';
import { FormuleService } from './formule.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TabComponent],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FormuleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
