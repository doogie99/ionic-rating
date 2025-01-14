import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { IonicRatingComponentModule } from 'projects/ionic-rating-component/src/public-api';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
