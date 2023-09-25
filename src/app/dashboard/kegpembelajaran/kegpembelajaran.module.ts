import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KegpembelajaranPageRoutingModule } from './kegpembelajaran-routing.module';

import { KegpembelajaranPage } from './kegpembelajaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KegpembelajaranPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [KegpembelajaranPage]
})
export class KegpembelajaranPageModule {}
