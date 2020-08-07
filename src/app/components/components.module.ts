import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentsComponent } from './establishments/establishments.component'
import { EstablishmentComponent } from './establishment/establishment.component'
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { CommentaryComponent } from './commentary/commentary.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EstablishmentsComponent,
    EstablishmentComponent,
    CommentaryComponent,
    MenuComponent
  ],
  exports: [
    EstablishmentsComponent,
    CommentaryComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule
  ]
})
export class ComponentsModule { }
