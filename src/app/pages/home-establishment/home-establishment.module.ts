import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEstablishmentPageRoutingModule } from './home-establishment-routing.module';

import { HomeEstablishmentPage } from './home-establishment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEstablishmentPageRoutingModule
  ],
  declarations: [HomeEstablishmentPage]
})
export class HomeEstablishmentPageModule {}
