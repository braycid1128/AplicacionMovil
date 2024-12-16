import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, addDoc, deleteDoc, doc, query, where } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  storage: Storage = inject(Storage);

  constructor() {
    this.storage.create();
  }

  // Método para guardar el usuario localmente
  async guardarUsuarioLocal(usuario: any) {
    try {
      await this.storage.set('usuario', usuario);
      console.log('Usuario guardado localmente');
    } catch (error) {
      console.error('Error al guardar usuario localmente:', error);
    }
  }

  // Método para obtener el usuario guardado localmente
  async obtenerUsuarioLocal() {
    try {
      return await this.storage.get('usuario');
    } catch (error) {
      console.error('Error al obtener usuario localmente:', error);
      return null;
    }
  }

  // Método para registrar el usuario en Firestore
  async registrarUsuario(usuario: any) {
    try {
      const usuariosCollection = collection(this.firestore, 'usuarios');
      await addDoc(usuariosCollection, usuario);
      console.log('Usuario registrado correctamente');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }

  // Método para obtener las secciones desde Firestore
  async obtenerSecciones() {
    try {
      const seccionesCollection = collection(this.firestore, 'secciones');
      const querySnapshot = await getDocs(seccionesCollection);  // Uso de getDocs
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error al obtener secciones: ', error);
      return [];
    }
  }

  // Método para agregar una nueva sección a Firestore
  async agregarSeccion(seccion: any) {
    try {
      const seccionesCollection = collection(this.firestore, 'secciones');
      await addDoc(seccionesCollection, seccion);
      console.log('Sección agregada correctamente');
    } catch (error) {
      console.error('Error al agregar la sección: ', error);
    }
  }

  // Método para eliminar una sección de Firestore
  async eliminarSeccion(id: string) {
    try {
      const seccionDocRef = doc(this.firestore, `secciones/${id}`);
      await deleteDoc(seccionDocRef);
      console.log('Sección eliminada correctamente');
    } catch (error) {
      console.error('Error al eliminar la sección: ', error);
    }
  }

  // **Método CORREGIDO para obtener un usuario por correo** (ahora existe en el servicio)
  async obtenerUsuarioPorCorreo(correo: string) {
    try {
      const usuariosCollection = collection(this.firestore, 'usuarios');
      const q = query(usuariosCollection, where('correo', '==', correo));  // Cambiar 'username' a 'correo'
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const usuario = querySnapshot.docs[0].data();
        return usuario;
      } else {
        console.log('No se encontró ningún usuario con ese correo');  // Log para verificar la consulta
        return null;
      }
    } catch (error) {
      console.error('Error al obtener usuario desde Firestore:', error);
      return null;
    }
  }
}
