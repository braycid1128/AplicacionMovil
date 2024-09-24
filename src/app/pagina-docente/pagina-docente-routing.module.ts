import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaDocentePage } from './pagina-docente.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaDocentePageRoutingModule {}
