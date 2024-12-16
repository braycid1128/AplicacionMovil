import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarseccionPageRoutingModule } from './administrarseccion-routing.module';

import { AdministrarseccionPage } from './administrarseccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarseccionPageRoutingModule
  ],
  declarations: [AdministrarseccionPage]
})
export class AdministrarseccionPageModule {}
