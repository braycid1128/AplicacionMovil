import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarseccionPage } from './administrarseccion.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarseccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarseccionPageRoutingModule {}
