import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TabsPage } from './tabs.page';
import { TabsRoutigModule } from './tabs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutigModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
