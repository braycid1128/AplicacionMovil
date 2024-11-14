import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDbService } from '../services/localdb.service'; 
import { AlertController } from '@ionic/angular'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    clave: ''
  };

  constructor(
    private localDbService: LocalDbService,
    private alertController: AlertController,
    private router: Router
  ) {}

  async onSubmit() {
    await this.localDbService.guardarDatos('usuario', this.usuario);
    console.log('Datos guardados', this.usuario);

    await this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Te has registrado correctamente.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
