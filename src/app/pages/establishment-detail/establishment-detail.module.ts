import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablishmentDetailPageRoutingModule } from './establishment-detail-routing.module';

import { EstablishmentDetailPage } from './establishment-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EstablishmentDetailPageRoutingModule
  ],
  declarations: [EstablishmentDetailPage]
})
export class EstablishmentDetailPageModule {}
