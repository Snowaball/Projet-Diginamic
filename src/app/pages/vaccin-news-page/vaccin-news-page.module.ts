import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinNewsPagePageRoutingModule } from './vaccin-news-page-routing.module';

import { VaccinNewsPagePage } from './vaccin-news-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinNewsPagePageRoutingModule
  ],
  declarations: [VaccinNewsPagePage]
})
export class VaccinNewsPagePageModule {}
