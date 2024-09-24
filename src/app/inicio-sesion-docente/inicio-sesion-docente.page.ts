import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { usuarioLog } from 'src/app/interfaces/usuario-log';

@Component({
  selector: 'app-inicio-sesion-docente',
  templateUrl: './inicio-sesion-docente.page.html',
  styleUrls: ['./inicio-sesion-docente.page.scss'],
})
export class InicioSesionDocentePage implements OnInit {

  mensaje:string=""

  usr:usuarioLog={
    username:'',
    password:''
  }

  constructor(private alertctrl:AlertController, private router:Router) { }

  ngOnInit() {
   
  }

  enviar(){


    console.log("Form Enviado...");
    console.log(this.usr);
    if(this.usr.username=="docente@duocuc.cl" && this.usr.password=="duoc"){
      this.usr.username='';
      this.usr.password=''
      this.router.navigate(['/pagina-docente'])
    }
    else{
      this.mensaje="Acceso denegado"
      this.alerta()
    }
  }

  async alerta(){
    console.log("Alerta desde controller");
    const alert = await this.alertctrl.create({
      header: 'Acceso denegado',
      subHeader: 'Correo y/o contraseña incorrecto',
      buttons: [{
        id:'aceptar del alert controller',
        text:'Aceptar',
        cssClass:'color-aceptar',
        handler:()=>{
          console.log(event);
        }
      },{
        text:'Cancelar',
        cssClass:'color-cancelar'
      }],
    });

    await alert.present();
  }

  goToRestablecer() {
    this.router.navigate(['/restablecer']);
  }
}