import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstablishmentRegisterPage } from './establishment-register.page';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablishmentRegisterPageRoutingModule {}
