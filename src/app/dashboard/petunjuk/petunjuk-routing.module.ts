import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetunjukPage } from './petunjuk.page';

const routes: Routes = [
  {
    path: '',
    component: PetunjukPage
  },
  {
    path: 'modul',
    loadChildren: () => import('./modul/modul.module').then( m => m.ModulPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetunjukPageRoutingModule {}
