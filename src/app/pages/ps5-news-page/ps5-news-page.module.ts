import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ps5NewsPagePageRoutingModule } from './ps5-news-page-routing.module';

import { Ps5NewsPagePage } from './ps5-news-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ps5NewsPagePageRoutingModule
  ],
  declarations: [Ps5NewsPagePage]
})
export class Ps5NewsPagePageModule {}
