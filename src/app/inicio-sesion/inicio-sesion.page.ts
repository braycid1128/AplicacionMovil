import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';  // Importamos el servicio de Firebase
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {
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
          this.router.navigate(['/pagina-estudiante']);
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
