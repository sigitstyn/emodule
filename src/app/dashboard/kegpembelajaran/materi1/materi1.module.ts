import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Materi1PageRoutingModule } from './materi1-routing.module';

import { Materi1Page } from './materi1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Materi1PageRoutingModule
  ],
  declarations: [Materi1Page]
})
export class Materi1PageModule {}
