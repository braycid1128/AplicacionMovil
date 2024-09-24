import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-horario',
  templateUrl: 'horario.page.html',
  styleUrls: ['horario.page.scss'],
})
export class HorarioPage {
  constructor(private navCtrl: NavController) {}

  irAperfil() {
    // Navega a la página del perfil
    this.navCtrl.navigateForward('/perfil');
  }

  irAcalendario() {
    // Navega a la página del calendario
    this.navCtrl.navigateForward('/calendario');
  }
}
