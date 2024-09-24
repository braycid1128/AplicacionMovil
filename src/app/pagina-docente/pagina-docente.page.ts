import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-docente',
  templateUrl: './pagina-docente.page.html',
  styleUrls: ['./pagina-docente.page.scss'],
})
export class PaginaDocentePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCodigoQr() {
    this.router.navigate(['/codigo-qr']);
  }

  goToSecciones() {
    this.router.navigate(['/secciones']);
  }

  goToPerfilDocente() {
    this.router.navigate(['/perfil-docente']);
  }

}
