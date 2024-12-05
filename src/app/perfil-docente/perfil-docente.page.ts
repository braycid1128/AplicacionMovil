import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalDbService } from '../services/localdb.service';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  styleUrls: ['./perfil-docente.page.scss'],
})
export class PerfilDocentePage {
  docent = {
    name: '',
    photo: '',
    teach: 'Arquitectura',
    yearOfEntry: 2004,
    office: 'Sala 205, Edificio Principal',
    email: '',
    hours: 'Lunes a Viernes, 10:00 AM - 12:00 PM'
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private localDbService: LocalDbService 
  ) {}

  async ngOnInit() {
    const usuarioGuardado = await this.localDbService.obtenerDatos('usuario');
    if (usuarioGuardado) {
      this.docent.name = `${usuarioGuardado.nombre} ${usuarioGuardado.apellido}`;
      this.docent.email = usuarioGuardado.correo; 
      this.docent.photo = usuarioGuardado.foto || 'assets/docente.png'; 
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
