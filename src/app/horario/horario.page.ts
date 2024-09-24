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
    this.navCtrl.navigateForward('/perfil');
  }

  irAcalendario() {
    this.navCtrl.navigateForward('/calendario');
  }
}
