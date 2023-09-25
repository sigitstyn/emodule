import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KikdPageRoutingModule } from './kikd-routing.module';

import { KikdPage } from './kikd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KikdPageRoutingModule
  ],
  declarations: [KikdPage]
})
export class KikdPageModule {}
