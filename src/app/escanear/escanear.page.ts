import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage {
  barcodes: any[] = []; // Store scanned barcodes
  isSupported = true; // Check if the device supports scanning

  constructor() { }

  ngOnInit() {
    this.checkSupport();
  }

  // Check if barcode scanning is supported
  async checkSupport() {
    const result = await BarcodeScanner.isSupported();
    this.isSupported = result.supported;
  }

  // Start scanning for barcodes
  async scan() {
    document.querySelector('body')?.classList.add('barcode-scanner-active');
    
    const listener = await BarcodeScanner.addListener('barcodeScanned', (result) => {
      console.log(result);
      this.barcodes = [result.barcode]; // Save the scanned barcode
      this.stopScan(); // Stop the scan after successful barcode scan
    });

    await BarcodeScanner.startScan();
  }

  // Stop scanning
  async stopScan() {
    document.querySelector('body')?.classList.remove('barcode-scanner-active');
    await BarcodeScanner.removeAllListeners();
    await BarcodeScanner.stopScan();
  }

  // Enable flashlight (torch)
  async enableTorch() {
    await BarcodeScanner.enableTorch();
  }

  // Disable flashlight (torch)
  async disableTorch() {
    await BarcodeScanner.disableTorch();
  }
}
