import { Component } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage {
  sections: string[] = [
    'Sección 1',
    'Sección 2',
    'Sección 3',
    'Sección 4',
    'Sección 5'
  ];

  qrCodeData: string | null = null;

  // This function generates a random section
  generateRandomQRCode() {
    const randomIndex = Math.floor(Math.random() * this.sections.length);
    this.qrCodeData = this.sections[randomIndex];
  }

  // This function generates QR code for a selected section
  generateQRCode(section: string) {
    this.qrCodeData = section;
  }
}
