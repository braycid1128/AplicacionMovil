import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class LocalDbService {
  constructor(private storage: Storage) {
    this.storage.create();
  }

  async guardarDatos(key: string, data: any) {
    await this.storage.set(key, data);
  }

  async obtenerDatos(key: string) {
    return await this.storage.get(key);
  }

  async borrarDatos(key: string) {
    await this.storage.remove(key);
  }
}
