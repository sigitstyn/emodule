import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarpustakaPageRoutingModule } from './daftarpustaka-routing.module';

import { DaftarpustakaPage } from './daftarpustaka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarpustakaPageRoutingModule
  ],
  declarations: [DaftarpustakaPage]
})
export class DaftarpustakaPageModule {}
