import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDbService } from '../services/localdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion-docente',
  templateUrl: './inicio-sesion-docente.page.html',
  styleUrls: ['./inicio-sesion-docente.page.scss'],
})
export class InicioSesionDocentePage {
  usr = {
    username: '',
    password: ''
  };

  mensaje: string = '';

  constructor(private localDbService: LocalDbService, private router: Router) {}

  async enviar() {
    const usuarioGuardado = await this.localDbService.obtenerDatos('usuario');

    if (usuarioGuardado) {
      if (this.usr.username === usuarioGuardado.correo && this.usr.password === usuarioGuardado.clave) {
        this.mensaje = 'Inicio de sesión exitoso';
        this.router.navigate(['/pagina-docente']);
      } else {
        this.mensaje = 'Correo o contraseña incorrectos';
      }
    } else {
      this.mensaje = 'No hay datos de registro';
    }
  }

  goToRestablecer() {
    this.router.navigate(['/restablecer']);
  }
}
