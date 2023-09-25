import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Materi2PageRoutingModule } from './materi2-routing.module';

import { Materi2Page } from './materi2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Materi2PageRoutingModule
  ],
  declarations: [Materi2Page]
})
export class Materi2PageModule {}
