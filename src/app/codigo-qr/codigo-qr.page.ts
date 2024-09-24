import { Component } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage {
  sections = ['D398', 'D298', 'E638', 'A123', 'B456', 'C789'];
  qrCodeData: string = '';

  constructor() {
    console.log('CodigoQrPage initialized');
  }

  generateQRCode(section: string) {
    this.qrCodeData = `Codigo: ${section}-${Math.floor(Math.random() * 10000)}`;
    console.log(`Generated QR Code Data: ${this.qrCodeData}`);
  }
}