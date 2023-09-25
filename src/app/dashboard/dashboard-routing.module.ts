import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'petunjuk',
    loadChildren: () => import('./petunjuk/petunjuk.module').then( m => m.PetunjukPageModule)
  },
  {
    path: 'pendahuluan',
    loadChildren: () => import('./pendahuluan/pendahuluan.module').then( m => m.PendahuluanPageModule)
  },
  {
    path: 'kikd',
    loadChildren: () => import('./kikd/kikd.module').then( m => m.KikdPageModule)
  },
  {
    path: 'petakonsep',
    loadChildren: () => import('./petakonsep/petakonsep.module').then( m => m.PetakonsepPageModule)
  },
  {
    path: 'kegpembelajaran',
    loadChildren: () => import('./kegpembelajaran/kegpembelajaran.module').then( m => m.KegpembelajaranPageModule)
  },
  {
    path: 'glosarium',
    loadChildren: () => import('./glosarium/glosarium.module').then( m => m.GlosariumPageModule)
  },
  {
    path: 'daftarpustaka',
    loadChildren: () => import('./daftarpustaka/daftarpustaka.module').then( m => m.DaftarpustakaPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
