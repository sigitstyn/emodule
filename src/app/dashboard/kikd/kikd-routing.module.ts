import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KikdPage } from './kikd.page';

const routes: Routes = [
  {
    path: '',
    component: KikdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KikdPageRoutingModule {}
