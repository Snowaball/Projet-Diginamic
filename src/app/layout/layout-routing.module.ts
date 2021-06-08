import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'covid-news-page',
    loadChildren: () => import('../pages/covid-news-page/covid-news-page.module').then(m => m.CovidNewsPagePageModule)
  },
  {
    path: 'vaccin-news-page',
    loadChildren: () => import('../pages/vaccin-news-page/vaccin-news-page.module').then(m => m.VaccinNewsPagePageModule)
  },
  {
    path: 'ps5-news-page',
    loadChildren: () => import('../pages/ps5-news-page/ps5-news-page.module').then(m => m.Ps5NewsPagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
