import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Materi1Page } from './materi1.page';

const routes: Routes = [
  {
    path: '',
    component: Materi1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Materi1PageRoutingModule {}
