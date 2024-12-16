import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {
  secciones: any[] = []; // Lista de secciones obtenidas de Firebase
  seccionSeleccionada: string = ''; // Sección seleccionada
  fechaSeleccionada: string = ''; // Fecha seleccionada para el QR
  mostrarCodigoQR: boolean = false; // Para mostrar el QR
  config: any = { data: '' }; // Configuración del QR

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    this.cargarSecciones(); // Cargar las secciones desde Firebase
  }

  // Cargar las secciones desde Firebase
  async cargarSecciones() {
    try {
      const seccionesCollection = collection(this.firestore, 'secciones');
      const seccionesSnapshot = await getDocs(seccionesCollection);
      this.secciones = seccionesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error('Error al cargar las secciones desde Firebase:', error);
    }
  }

  // Generar el QR con la información seleccionada
  onGenerarQR() {
    if (this.seccionSeleccionada && this.fechaSeleccionada) {
      // Formato del QR: Sección y Fecha
      this.config.data = `Sección: ${this.seccionSeleccionada}, Fecha: ${this.fechaSeleccionada}`;
      this.mostrarCodigoQR = true;
    } else {
      alert('Por favor, selecciona una sección y una fecha.');
    }
  }

  // Borrar el QR generado
  onBorrarQR() {
    this.mostrarCodigoQR = false;
    this.config.data = '';
  }
}
