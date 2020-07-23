import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentsComponent } from './establishments/establishments.component'
import { EstablishmentComponent } from './establishment/establishment.component'
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    EstablishmentsComponent,
    EstablishmentComponent,
  ],
  exports: [
    EstablishmentsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class ComponentsModule { }
