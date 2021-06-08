import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinNewsPagePage } from './vaccin-news-page.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinNewsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinNewsPagePageRoutingModule {}
