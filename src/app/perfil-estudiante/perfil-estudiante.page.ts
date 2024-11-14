import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router
import { LocalDbService } from '../services/localdb.service'; // Import LocalDbService

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage {
  student = {
    name: '',
    photo: '', // URL of the student's photo or default
    career: 'Ingeniería en Informática',
    yearOfEntry: 2020,
    matricula: '2020101234',
    email: '',
    semester: '6to Semestre'
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
      this.student.name = `${usuarioGuardado.nombre} ${usuarioGuardado.apellido}`; // Combina el nombre y apellido
      this.student.email = usuarioGuardado.correo; // Establece el correo del usuario
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
