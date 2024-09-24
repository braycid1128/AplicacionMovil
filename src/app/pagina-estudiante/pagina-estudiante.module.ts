import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaEstudiantePageRoutingModule } from './pagina-estudiante-routing.module';

import { PaginaEstudiantePage } from './pagina-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaEstudiantePageRoutingModule
  ],
  declarations: [PaginaEstudiantePage]
})
export class PaginaEstudiantePageModule {}
