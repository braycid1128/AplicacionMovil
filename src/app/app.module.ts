import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LocalDbService } from './services/localdb.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),  // Configuración de IonicStorage
  ],
  providers: [LocalDbService],  // Asegúrate de que el servicio esté aquí
  bootstrap: [AppComponent]
})
export class AppModule {}
