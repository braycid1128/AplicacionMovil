import { Component } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage {
  fechaSeleccionada: string = ''; 
  mostrarCodigoQR: boolean = false; 
  config = { data: '' };

  constructor() {}

  onGenerarQR() {
    if (this.fechaSeleccionada) {
      this.config.data = this.fechaSeleccionada; 
      this.mostrarCodigoQR = true; 
    }
  }

  onBorrarQR() {
    this.mostrarCodigoQR = false; 
    this.fechaSeleccionada = '';
    this.config.data = ''; 
  }

  onVerAsistencia() {
    console.log('Ver Asistencia');
  }
}
