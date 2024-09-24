import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionDocentePageRoutingModule } from './inicio-sesion-docente-routing.module';

import { InicioSesionDocentePage } from './inicio-sesion-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionDocentePageRoutingModule
  ],
  declarations: [InicioSesionDocentePage]
})
export class InicioSesionDocentePageModule {}
