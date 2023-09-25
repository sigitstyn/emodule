import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarpustakaPage } from './daftarpustaka.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarpustakaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarpustakaPageRoutingModule {}
