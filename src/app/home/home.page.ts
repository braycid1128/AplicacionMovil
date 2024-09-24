import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  // Método para navegar a la página de Estudiantes
  goToEstudiantes() {
    this.router.navigate(['/inicio-sesion']);
  }

  // Método para navegar a la página de Docentes
  goToDocentes() {
    this.router.navigate(['/inicio-sesion-docente']);
  }
}