import { Component } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage {
  fechaSeleccionada: string = ''; 
  seccionSeleccionada: string = '';  // Nueva propiedad para la sección seleccionada
  mostrarCodigoQR: boolean = false; 
  config = { data: '' };

  constructor() {}

  onGenerarQR() {
    // Verificamos que se haya seleccionado tanto la fecha como la sección
    if (this.fechaSeleccionada && this.seccionSeleccionada) {
      // Combinamos la sección y la fecha para generar el QR
      this.config.data = `Sección: ${this.seccionSeleccionada} - Fecha: ${this.fechaSeleccionada}`;
      this.mostrarCodigoQR = true; 
    } else {
      // Mostrar alerta si falta alguna información
      alert('Por favor, selecciona una sección y una fecha.');
    }
  }

  onBorrarQR() {
    this.mostrarCodigoQR = false; 
    this.fechaSeleccionada = '';
    this.seccionSeleccionada = '';  // Limpiamos la sección seleccionada
    this.config.data = ''; 
  }

  onVerAsistencia() {
    console.log('Ver Asistencia');
  }
}
