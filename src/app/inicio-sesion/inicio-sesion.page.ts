import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDbService } from '../services/localdb.service';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {
  usr = {
    username: '',
    password: ''
  };

  mensaje: string = '';

  constructor(private localDbService: LocalDbService, private router: Router) {}  // Inyecta Router

  async enviar() {
    const usuarioGuardado = await this.localDbService.obtenerDatos('usuario');

    if (usuarioGuardado) {
      if (this.usr.username === usuarioGuardado.correo && this.usr.password === usuarioGuardado.clave) {
        this.mensaje = 'Inicio de sesión exitoso';
        this.router.navigate(['/pagina-estudiante']);  // Navega a la página docente
      } else {
        this.mensaje = 'Correo o contraseña incorrectos';
      }
    } else {
      this.mensaje = 'No hay datos de registro';
    }
  }

  goToRestablecer() {
    this.router.navigate(['/restablecer']);  // Redirige a la página de restablecimiento
  }
}
