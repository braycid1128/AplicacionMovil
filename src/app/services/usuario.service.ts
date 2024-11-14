import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuario: string | null = 'profesor'; // Cambiar según la lógica de tu app

  obtenerUsuario(): string | null {
    return this.usuario;
  }

  getUserInfo() {
    return { id: 1, nombre: 'Profesor' }; // Ejemplo de información del usuario
  }
}
