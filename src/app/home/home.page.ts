import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  goToRegistro() {
    this.router.navigate(['/registro']); // Redirige a la página de registro
  }

  goToEstudiantes() {
    this.router.navigate(['/inicio-sesion']);
  }

  goToDocentes() {
    this.router.navigate(['/inicio-sesion-docente']);
  }
}