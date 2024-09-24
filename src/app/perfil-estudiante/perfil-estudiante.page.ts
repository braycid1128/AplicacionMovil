import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage {
  student = {
    name: 'Juan Pérez',
    photo: '', // URL of the student's photo or default
    career: 'Ingeniería en Informática',
    yearOfEntry: 2020,
    matricula: '2020101234',
    email: 'juan.perez@university.com',
    semester: '6to Semestre'
  };

  constructor(private alertController: AlertController, private router: Router) {} // Inject Router

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
    // Redirect to home page
    this.router.navigate(['/home']); // Replace '/home' with your actual home route
  }
}
