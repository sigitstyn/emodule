import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendahuluanPageRoutingModule } from './pendahuluan-routing.module';

import { PendahuluanPage } from './pendahuluan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendahuluanPageRoutingModule
  ],
  declarations: [PendahuluanPage]
})
export class PendahuluanPageModule {}
