import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetakonsepPageRoutingModule } from './petakonsep-routing.module';

import { PetakonsepPage } from './petakonsep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetakonsepPageRoutingModule
  ],
  declarations: [PetakonsepPage]
})
export class PetakonsepPageModule {}
