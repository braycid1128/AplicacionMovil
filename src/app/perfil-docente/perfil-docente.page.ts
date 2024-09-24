import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  styleUrls: ['./perfil-docente.page.scss'],
})
export class PerfilDocentePage {
  docent = {
    name: 'Carlos Mendoza',
    photo: '', // URL of the student's photo or default
    teach: 'Arquitectura',
    yearOfEntry: 2004,
    office: 'Sala 205, Edificio Principal',
    email: 'carlos.mendoza@university.com',
    hours: 'Lunes a Viernes, 10:00 AM - 12:00 PM'
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