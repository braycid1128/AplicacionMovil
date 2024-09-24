import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionDocentePage } from './inicio-sesion-docente.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionDocentePageRoutingModule {}
