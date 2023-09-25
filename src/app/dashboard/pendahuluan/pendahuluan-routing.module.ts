import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendahuluanPage } from './pendahuluan.page';

const routes: Routes = [
  {
    path: '',
    component: PendahuluanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendahuluanPageRoutingModule {}
