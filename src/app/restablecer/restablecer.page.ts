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
    this.mensaje = 'Código enviado satisfactoriamente';
    
    this.correo = '';
  }
}