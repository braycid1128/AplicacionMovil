import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';  // Importar el servicio

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    clave: ''
  };

  constructor(private firebaseService: FirebaseService) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.usuario.nombre && this.usuario.apellido && this.usuario.correo && this.usuario.clave) {
      // Guardar el usuario localmente primero
      this.firebaseService.guardarUsuarioLocal(this.usuario)
        .then(() => {
          console.log('Usuario guardado localmente');
        })
        .catch((error) => {
          console.error('Error al guardar usuario localmente:', error);
        });

      // Llamar al servicio para registrar el usuario en Firebase
      this.firebaseService.registrarUsuario(this.usuario)
        .then(() => {
          console.log('Registro exitoso');
          // Redirigir o limpiar el formulario si es necesario
        })
        .catch((error) => {
          console.error('Error al registrar usuario:', error);
        });
    }
  }
}
