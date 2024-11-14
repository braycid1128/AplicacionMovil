import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class LocalDbService {
  constructor(private storage: Storage) {
    this.storage.create(); // Inicializa el almacenamiento
  }

  // Método para guardar los datos
  async guardarDatos(key: string, data: any) {
    await this.storage.set(key, data);
  }

  // Método para obtener los datos
  async obtenerDatos(key: string) {
    return await this.storage.get(key);
  }

  // Método para borrar los datos
  async borrarDatos(key: string) {
    await this.storage.remove(key);
  }
}
