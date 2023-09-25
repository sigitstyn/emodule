import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KegpembelajaranPage } from './kegpembelajaran.page';

const routes: Routes = [
  {
    path: '',
    component: KegpembelajaranPage
  },
  {
    path: 'materi1',
    loadChildren: () => import('./materi1/materi1.module').then( m => m.Materi1PageModule)
  },
  {
    path: 'materi2',
    loadChildren: () => import('./materi2/materi2.module').then( m => m.Materi2PageModule)
  },
  {
    path: 'modals',
    loadChildren: () => import('./modals/modals.module').then( m => m.ModalsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KegpembelajaranPageRoutingModule {}
