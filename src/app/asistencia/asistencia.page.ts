import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, addDoc, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  secciones: any[] = []; // Lista de secciones

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    await this.cargarSecciones();
  }

  // Cargar las secciones del usuario desde Firestore
  async cargarSecciones() {
    try {
      // Aquí recuperamos las secciones del usuario
      const seccionesCollection = collection(this.firestore, 'secciones');
      const seccionesSnapshot = await getDocs(seccionesCollection);

      // Mapeamos las secciones y calculamos los datos necesarios
      this.secciones = seccionesSnapshot.docs.map(doc => {
        const section = doc.data();
        const cantidadDias = section['cantidadDias'] || 0;
        const scannedCount = section['scannedCount'] || 0;

        // Calcular el porcentaje de escaneos
        const percentage = cantidadDias > 0 ? Math.min((scannedCount / cantidadDias) * 100, 100) : 0;

        return {
          id: doc.id,
          codigo: section['codigo'],
          descripcion: section['descripcion'],
          cantidadDias: cantidadDias,
          scannedCount: scannedCount,
          percentage: Math.round(percentage), // Redondear el porcentaje
        };
      });
    } catch (error) {
      console.error('Error al cargar secciones:', error);
    }
  }
}
