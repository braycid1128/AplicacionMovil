import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaEstudiantePage } from './pagina-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaEstudiantePageRoutingModule {}
