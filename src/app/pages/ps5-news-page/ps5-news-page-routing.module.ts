import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ps5NewsPagePage } from './ps5-news-page.page';

const routes: Routes = [
  {
    path: '',
    component: Ps5NewsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ps5NewsPagePageRoutingModule {}
