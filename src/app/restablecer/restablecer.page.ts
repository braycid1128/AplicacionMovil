import { Component } from '@angular/core';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage {
  correo: string = '';
  mensaje: string = '';

  enviarCodigo() {
    // Aquí puedes implementar la lógica para enviar el código de recuperación
    // Por ahora, solo mostramos un mensaje
    this.mensaje = 'Código enviado satisfactoriamente';
    
    // Reiniciar el formulario o la variable de correo, si es necesario
    this.correo = '';
  }
}