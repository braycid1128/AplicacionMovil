import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalDbService } from '../services/localdb.service';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage {
  student = {
    name: '',
    photo: '',
    career: 'Ingeniería en Informática',
    yearOfEntry: 2020,
    matricula: '2020101234',
    email: '',
    semester: '6to Semestre'
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private localDbService: LocalDbService
  ) {}

  async ngOnInit() {
    const usuarioGuardado = await this.localDbService.obtenerDatos('usuario');
    if (usuarioGuardado) {
      this.student.name = `${usuarioGuardado.nombre} ${usuarioGuardado.apellido}`;
      this.student.email = usuarioGuardado.correo;
    }
  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmar Salida',
      message: '¿Desea salir de la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Salir',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  async logout() {
    console.log('Logged out');
    this.router.navigate(['/home']);
  }
}
