import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidNewsPagePageRoutingModule } from './covid-news-page-routing.module';

import { CovidNewsPagePage } from './covid-news-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidNewsPagePageRoutingModule
  ],
  declarations: [CovidNewsPagePage]
})
export class CovidNewsPagePageModule {}
