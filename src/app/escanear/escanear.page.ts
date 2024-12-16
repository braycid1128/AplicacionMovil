import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {
  barcodes: any[] = [];  // Aquí almacenamos los códigos escaneados
  isSupported = true;     // Verifica si el dispositivo soporta la funcionalidad

  constructor() { }

  ngOnInit() {
    this.checkSupport();
  }

  async checkSupport() {
    try {
      const result = await BarcodeScanner.checkAvailability();
      this.isSupported = result.available;
    } catch (error) {
      console.error("Error checking support for barcode scanning", error);
    }
  }

  async scan() {
    try {
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        this.barcodes = [result];  // Guarda el código escaneado
      }
    } catch (error) {
      console.error("Error scanning barcode", error);
    }
  }
}
