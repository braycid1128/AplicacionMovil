import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, addDoc, doc, setDoc, deleteDoc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-administrarseccion',
  templateUrl: './administrarseccion.page.html',
  styleUrls: ['./administrarseccion.page.scss'],
})
export class AdministrarseccionPage implements OnInit {
  secciones: any[] = []; // Lista de secciones
  usuarios: any[] = []; // Lista de usuarios
  codigoSeccion = ''; // Código de la nueva sección
  descripcionSeccion = ''; // Descripción de la nueva sección
  cantidadDias: number = 0; // Cantidad de días de la nueva sección
  usuariosSeleccionados: string[] = []; // Usuarios seleccionados para enlazar (usando el código de la sección)

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    await this.cargarSecciones();
    await this.cargarUsuarios();
  }

  // Cargar secciones desde Firebase
  async cargarSecciones() {
    try {
      const seccionesCollection = collection(this.firestore, 'secciones');
      const seccionesSnapshot = await getDocs(seccionesCollection);
      this.secciones = seccionesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error('Error al cargar secciones:', error);
    }
  }

  // Cargar usuarios desde Firebase
  async cargarUsuarios() {
    try {
      const usuariosCollection = collection(this.firestore, 'usuarios');
      const usuariosSnapshot = await getDocs(usuariosCollection);
      this.usuarios = usuariosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  }

  // Agregar nueva sección
  async agregarSeccion() {
    if (!this.codigoSeccion || !this.descripcionSeccion || this.cantidadDias <= 0) {
      alert('Por favor, completa todos los campos y asegúrate de que la cantidad de días sea válida.');
      return;
    }

    try {
      // Crear la nueva sección en Firestore con la cantidad de días
      const seccionesCollection = collection(this.firestore, 'secciones');
      const docRef = await addDoc(seccionesCollection, {
        codigo: this.codigoSeccion,
        descripcion: this.descripcionSeccion,
        cantidadDias: this.cantidadDias, // Guardar cantidad de días
      });

      // Enlazar los usuarios seleccionados con la nueva sección
      for (let usuarioId of this.usuariosSeleccionados) {
        const usuarioDoc = doc(this.firestore, `usuarios/${usuarioId}`);
        await setDoc(doc(this.firestore, `secciones/${docRef.id}/usuarios`, usuarioId), {
          usuarioId: usuarioId,
          fechaEnlace: new Date(),
        });
      }

      alert('Sección y usuarios enlazados exitosamente.');
      this.codigoSeccion = '';
      this.descripcionSeccion = '';
      this.cantidadDias = 0; // Limpiar el campo de cantidad de días
      this.usuariosSeleccionados = []; // Limpiar selección de usuarios
      await this.cargarSecciones(); // Actualizar la lista de secciones
    } catch (error) {
      console.error('Error al agregar sección y enlazar usuarios:', error);
    }
  }

  // Eliminar sección y sus usuarios relacionados
  async eliminarSeccion(seccionId: string) {
    try {
      // Buscar la sección por su ID
      const seccionRef = doc(this.firestore, `secciones/${seccionId}`);
      const seccionSnapshot = await getDoc(seccionRef); // Usar getDoc en lugar de getDocs

      if (seccionSnapshot.exists()) {
        // Eliminar los usuarios asociados a esa sección
        const usuariosCollection = collection(this.firestore, `secciones/${seccionId}/usuarios`);
        const usuariosSnapshot = await getDocs(usuariosCollection);

        for (let usuarioDoc of usuariosSnapshot.docs) {
          await deleteDoc(usuarioDoc.ref); // Eliminar cada usuario relacionado
        }

        // Eliminar la sección
        await deleteDoc(seccionRef); // Eliminar la sección completa

        alert('Sección y usuarios relacionados eliminados exitosamente.');
        await this.cargarSecciones(); // Actualizar la lista de secciones
      } else {
        alert('No se encontró la sección con ese ID.');
      }
    } catch (error) {
      console.error('Error al eliminar la sección y sus usuarios:', error);
    }
  }
}
