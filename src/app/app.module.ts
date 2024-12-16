import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LocalDbService } from './services/localdb.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    QRCodeModule,
    IonicStorageModule.forRoot(),  // Configuración de IonicStorage
  ],
  providers: [LocalDbService, provideFirebaseApp(() => initializeApp({"projectId":"proyectomovil-b05f7","appId":"1:474117867045:web:20dde41aca93f7d6dfa1cc","storageBucket":"proyectomovil-b05f7.firebasestorage.app","apiKey":"AIzaSyBUqF7y7ZUIy6GFMDM1Bgs19Ng_NEJGXbM","authDomain":"proyectomovil-b05f7.firebaseapp.com","messagingSenderId":"474117867045","measurementId":"G-8BEMGZHT7H"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()), provideAuth(() => getAuth())],  // Asegúrate de que el servicio esté aquí
  bootstrap: [AppComponent]
})
export class AppModule {}
