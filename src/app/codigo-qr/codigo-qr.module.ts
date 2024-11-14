import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CodigoQrPageRoutingModule } from './codigo-qr-routing.module';
import { CodigoQrPage } from './codigo-qr.page';

// Importar QRCodeModule
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoQrPageRoutingModule,
    QRCodeModule  // Asegúrate de agregar QRCodeModule aquí
  ],
  declarations: [CodigoQrPage]
})
export class CodigoQrPageModule {}
