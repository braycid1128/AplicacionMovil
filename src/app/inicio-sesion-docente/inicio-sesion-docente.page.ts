import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDbService } from '../services/localdb.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-inicio-sesion-docente',
  templateUrl: './inicio-sesion-docente.page.html',
  styleUrls: ['./inicio-sesion-docente.page.scss'],
})
export class InicioSesionDocentePage {
  usr = {
    username: '',  // Correo
    password: ''   // Contraseña
  };

  mensaje: string = '';

  constructor(
    private firebaseService: FirebaseService,  // Inyectamos el servicio de Firebase
    private router: Router
  ) {}

  // Método para manejar el inicio de sesión
  async enviar() {
    try {
      console.log('Buscando usuario con correo:', this.usr.username);  // Log para verificar el correo ingresado
      const usuario = await this.firebaseService.obtenerUsuarioPorCorreo(this.usr.username);
  
      if (usuario) {
        console.log('Usuario encontrado:', usuario);  // Verifica el usuario obtenido
        if (this.usr.password === usuario['clave']) {
          this.mensaje = 'Inicio de sesión exitoso';
          this.router.navigate(['/pagina-docente']);
        } else {
          this.mensaje = 'Correo o contraseña incorrectos';
        }
      } else {
        this.mensaje = 'Correo no encontrado';
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.mensaje = 'Error al intentar iniciar sesión';
    }
  }

  // Método para redirigir a la página de recuperación de contraseña
  goToRestablecer() {
    this.router.navigate(['/restablecer']);
  }
}
