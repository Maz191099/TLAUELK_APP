import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablishmentRegisterPageRoutingModule } from './establishment-register-routing.module';

import { EstablishmentRegisterPage } from './establishment-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablishmentRegisterPageRoutingModule
  ],
  declarations: [EstablishmentRegisterPage]
})
export class EstablishmentRegisterPageModule {}
