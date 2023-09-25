import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetakonsepPage } from './petakonsep.page';

const routes: Routes = [
  {
    path: '',
    component: PetakonsepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetakonsepPageRoutingModule {}
