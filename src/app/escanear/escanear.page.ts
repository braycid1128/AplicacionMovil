import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {
  barcodes: any[] = []; // Para almacenar los códigos escaneados
  isSupported: boolean = true; // Determina si el dispositivo soporta el escaneo

  constructor(private firestore: Firestore, private toastController: ToastController) {}

  ngOnInit() {
    // Verificar si el dispositivo soporta el escaneo
    this.checkDeviceSupport();
  }

  // Verificar si el dispositivo soporta el escaneo
  async checkDeviceSupport() {
    try {
      const permission = await BarcodeScanner.checkPermission();
      this.isSupported = permission.granted;
    } catch (error) {
      this.isSupported = false;
      console.error('Error al verificar soporte de dispositivo:', error);
    }
  }

  // Función para iniciar el escaneo
  async scan() {
    try {
      // Iniciar escaneo
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.handleScan(result.content); // Llamar a la función que maneja el escaneo
      } else {
        console.log('No se escaneó ningún código');
        this.presentToast('No se escaneó ningún código');
      }
    } catch (error) {
      console.error('Error al escanear:', error);
      this.presentToast('Error al escanear');
    }
  }

  // Manejar el escaneo y actualizar la asistencia
  async handleScan(codigoEscaneado: string) {
    const section = await this.findSectionByCodigo(codigoEscaneado);
    
    if (section) {
      // Aumentar la asistencia
      await this.updateAttendance(section);
    } else {
      console.log('Sección no encontrada');
      this.presentToast('Sección no encontrada');
    }
  }

  // Función para encontrar la sección por el código
  async findSectionByCodigo(codigo: string) {
    const seccionesCollection = collection(this.firestore, 'secciones');
    const seccionesSnapshot = await getDocs(seccionesCollection);
    const sectionDoc = seccionesSnapshot.docs.find(doc => doc.data()['codigo'] === codigo);
    return sectionDoc ? { ...sectionDoc.data(), id: sectionDoc.id } : null;
  }

  // Función para actualizar la asistencia de la sección en Firestore
  async updateAttendance(section: any) {
    const scannedCount = section.scannedCount || 0;
    const cantidadDias = section.cantidadDias || 1; // Asegurarse de que cantidadDias no sea 0

    const newScannedCount = scannedCount + 1;
    const newPercentage = Math.min((newScannedCount / cantidadDias) * 100, 100);

    try {
      const sectionRef = doc(this.firestore, 'secciones', section.id);
      await updateDoc(sectionRef, {
        scannedCount: newScannedCount,
        percentage: Math.round(newPercentage),
      });

      console.log('Asistencia actualizada correctamente');
      this.presentToast('Asistencia actualizada correctamente');
    } catch (error) {
      console.error('Error al actualizar asistencia en Firestore:', error);
      this.presentToast('Error al actualizar asistencia');
    }
  }

  // Función para mostrar un mensaje de retroalimentación
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
