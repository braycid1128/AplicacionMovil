import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-estudiante',
  templateUrl: './pagina-estudiante.page.html',
  styleUrls: ['./pagina-estudiante.page.scss'],
})
export class PaginaEstudiantePage {

  constructor(private router: Router) { }

  // Método para navegar a la página de Docentes
  goToAsistencia() {
    this.router.navigate(['/asistencia']);
  }

  goToEscanear() {
    this.router.navigate(['/escanear']);
  }

  goToPerfilEstudiante() {
    this.router.navigate(['/perfil-estudiante']);
  }
}