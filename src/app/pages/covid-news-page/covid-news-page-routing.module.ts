import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidNewsPagePage } from './covid-news-page.page';

const routes: Routes = [
  {
    path: '',
    component: CovidNewsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidNewsPagePageRoutingModule {}
