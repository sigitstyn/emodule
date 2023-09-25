import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './dashboard/petakonsep/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule],
    entryComponents: [
      ModalComponent, // Juga tambahkan di sini jika perlu
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
