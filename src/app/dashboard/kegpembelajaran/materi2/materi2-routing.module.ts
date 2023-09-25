import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Materi2Page } from './materi2.page';

const routes: Routes = [
  {
    path: '',
    component: Materi2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Materi2PageRoutingModule {}
