import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage {
  secciones = [
    { codigo: 'D384', descripcion: 'Sección Diurna', qrPath: 'assets/img/qrs/d384.png' },
    { codigo: 'E983', descripcion: 'Sección Vespertina', qrPath: 'assets/img/qrs/e983.png' },
    { codigo: 'E409', descripcion: 'Sección Diurna', qrPath: 'assets/img/qrs/e409.png' },
    { codigo: 'F202', descripcion: 'Sección Diurna', qrPath: 'assets/img/qrs/f202.png' },
    { codigo: 'G103', descripcion: 'Sección Vespertina', qrPath: 'assets/img/qrs/g103.png' },
  ];

  qrImage: string | null = null; // Propiedad para almacenar la ruta de la imagen QR
  qrSeccion: any = null; // Para almacenar la sección seleccionada

  constructor(private navCtrl: NavController) {}

  mostrarQr(seccion: any) {
    this.qrSeccion = seccion;
    this.qrImage = seccion.qrPath; // Asigna la ruta de la imagen QR seleccionada
  }

  cerrarQr() {
    this.qrImage = null; // Oculta la imagen QR
    this.qrSeccion = null; // Limpia la sección seleccionada
  }

  irAperfil() {
    this.navCtrl.navigateForward('/perfil');
  }

  irAcalendario() {
    this.navCtrl.navigateForward('/calendario');
  }
}
