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

  // Función para manejar el envío del formulario
  async onSubmit() {
    // Validar si todos los campos están completos
    if (!this.usuario.nombre || !this.usuario.apellido || !this.usuario.correo || !this.usuario.clave) {
      await this.presentAlert('Error', 'Por favor, completa todos los campos antes de continuar.');
      return;
    }

    // Guarda los datos del usuario en el almacenamiento
    await this.localDbService.guardarDatos('usuario', this.usuario);
    console.log('Datos guardados', this.usuario);

    // Muestra la alerta de registro exitoso
    await this.presentAlert('Registro Exitoso', 'Te has registrado correctamente.');
    this.router.navigate(['/home']); // Redirige a la página de inicio
  }

  // Función para mostrar alertas
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
