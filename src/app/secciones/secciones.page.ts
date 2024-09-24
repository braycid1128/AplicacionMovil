import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-secciones',
  templateUrl: 'secciones.page.html',
  styleUrls: ['secciones.page.scss'],
})
export class SeccionesPage {
  secciones = [
    { codigo: 'D384', descripcion: 'Sección de Matemáticas Avanzadas' },
    { codigo: 'E983', descripcion: 'Sección de Física Aplicada' },
    { codigo: 'E409', descripcion: 'Sección de Historia Moderna' },
    { codigo: 'F202', descripcion: 'Sección de Programación Avanzada' },
    { codigo: 'G103', descripcion: 'Sección de Literatura Clásica' },
  ];

  constructor(private navCtrl: NavController) {}

  verDetalle(seccion: any) {
    // Lógica para ver más detalles sobre una sección
    console.log('Ver detalles de la sección:', seccion);
  }

  irAperfil() {
    // Navega a la página del perfil
    this.navCtrl.navigateForward('/perfil');
  }

  irAcalendario() {
    // Navega a la página del calendario
    this.navCtrl.navigateForward('/calendario');
  }
}
