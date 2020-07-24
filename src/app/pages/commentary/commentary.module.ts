import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentaryPageRoutingModule } from './commentary-routing.module';

import { CommentaryPage } from './commentary.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CommentaryPageRoutingModule
  ],
  declarations: [CommentaryPage]
})
export class CommentaryPageModule {}
