import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEstablishmentPage } from './home-establishment.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEstablishmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEstablishmentPageRoutingModule {}
