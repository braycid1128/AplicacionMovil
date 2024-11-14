import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router
import { LocalDbService } from '../services/localdb.service'; // Import LocalDbService

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  styleUrls: ['./perfil-docente.page.scss'],
})
export class PerfilDocentePage {
  docent = {
    name: '',
    photo: '', // URL of the professor's photo or default
    teach: 'Arquitectura',
    yearOfEntry: 2004,
    office: 'Sala 205, Edificio Principal',
    email: '',
    hours: 'Lunes a Viernes, 10:00 AM - 12:00 PM'
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private localDbService: LocalDbService // Inyecta el servicio para obtener los datos
  ) {}

  async ngOnInit() {
    // Obtener datos guardados en local storage o base de datos local
    const usuarioGuardado = await this.localDbService.obtenerDatos('usuario');
    if (usuarioGuardado) {
      this.docent.name = `${usuarioGuardado.nombre} ${usuarioGuardado.apellido}`; // Combina el nombre y apellido
      this.docent.email = usuarioGuardado.correo; // Establece el correo del docente
      this.docent.photo = usuarioGuardado.foto || 'assets/docente.png'; // Establece la foto si existe
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
    // Redirige a la página de inicio
    this.router.navigate(['/home']); // Reemplaza '/home' con tu ruta de inicio real
  }
}
