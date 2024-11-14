import { Component } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage {
  fechaSeleccionada: string = ''; // Variable para la fecha seleccionada
  mostrarCodigoQR: boolean = false; // Controla la visibilidad del código QR
  config = { data: '' }; // Objeto para almacenar los datos del QR

  constructor() {}

  // Función para generar el código QR cuando se selecciona una fecha
  onGenerarQR() {
    if (this.fechaSeleccionada) {
      this.config.data = this.fechaSeleccionada; // Asignar la fecha seleccionada al QR
      this.mostrarCodigoQR = true; // Mostrar el código QR
    }
  }

  // Función para borrar el código QR
  onBorrarQR() {
    this.mostrarCodigoQR = false; // Ocultar el código QR
    this.fechaSeleccionada = ''; // Limpiar la fecha seleccionada
    this.config.data = ''; // Limpiar los datos del QR
  }

  // Función para ver la asistencia (ejemplo)
  onVerAsistencia() {
    // Aquí puedes agregar la lógica para ver la asistencia
    console.log('Ver Asistencia');
  }
}
