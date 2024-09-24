import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode'; // Ensure this is installed
import { CodigoQrPage } from './codigo-qr.page'; // Ensure the import path is correct

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule
  ],
  declarations: [CodigoQrPage],
})
export class CodigoQrPageModule {}
