import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDbService } from '../services/localdb.service';  // Importa el servicio
import { AlertController } from '@ionic/angular';  // Importa el AlertController
import { Router } from '@angular/router';  // Para redirigir a la página de inicio

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
    // Guarda los datos del usuario en el almacenamiento
    await this.localDbService.guardarDatos('usuario', this.usuario);
    console.log('Datos guardados', this.usuario);

    // Muestra la alerta de registro exitoso
    await this.presentAlert();
  }

  // Función para mostrar la alerta de "Registro Exitoso"
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Te has registrado correctamente.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            // Redirige a la página de inicio cuando se hace clic en "Aceptar"
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
