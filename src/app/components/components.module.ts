import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentsComponent } from './establishments/establishments.component'
import { EstablishmentComponent } from './establishment/establishment.component'
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { CommentaryComponent } from './commentary/commentary.component';

@NgModule({
  declarations: [
    EstablishmentsComponent,
    EstablishmentComponent,
    CommentaryComponent,
  ],
  exports: [
    EstablishmentsComponent,
    CommentaryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class ComponentsModule { }
