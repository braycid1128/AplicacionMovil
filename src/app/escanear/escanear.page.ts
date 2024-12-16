import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { Firestore, collection, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {
  barcodes: Barcode[] = []; // Para almacenar los códigos escaneados
  isSupported = false; // Para verificar si el dispositivo es compatible
  scannedMessage: string = ''; // Definir la propiedad scannedMessage

  constructor(
    private firestore: Firestore,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Verificar si el dispositivo es compatible con el escaneo
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
      console.log('Soporte para escaneo: ', this.isSupported);
    });
  }

  // Iniciar el escaneo
  async scan(): Promise<void> {
    console.log("Iniciando escaneo..."); // Mensaje de depuración
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentToast('Permiso denegado. Autoriza la cámara.');
      return;
    }

    console.log("Permiso otorgado, intentando escanear...");

    // Iniciar el escaneo
    const { barcodes } = await BarcodeScanner.scan();
    console.log('Resultados del escaneo:', barcodes); // Verificar si se obtienen resultados

    if (barcodes && barcodes.length > 0) {
      // Almacenar los códigos escaneados
      this.barcodes.push(...barcodes);
      barcodes.forEach((barcode) => {
        if (barcode.rawValue) {
          this.handleScan(barcode.rawValue); // Llamar a la función para manejar el código escaneado
        }
      });
    }
  }

  // Función para solicitar permisos
  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.checkPermissions();
    console.log('Permisos solicitados:', camera); // Verificar los permisos solicitados
    if (camera === 'granted' || camera === 'limited') {
      return true;
    } else {
      const { camera: newPermission } = await BarcodeScanner.requestPermissions();
      console.log('Nuevo intento de permisos:', newPermission);
      return newPermission === 'granted' || newPermission === 'limited';
    }
  }

  // Función para manejar el código escaneado
  async handleScan(codigoEscaneado: string) {
    const section = await this.findSectionByCodigo(codigoEscaneado);

    if (section) {
      // Actualizar la asistencia
      await this.updateAttendance(section);
      this.scannedMessage = 'Código escaneado correctamente'; // Asignar el mensaje
    } else {
      console.log('Sección no encontrada');
      this.scannedMessage = 'Sección no encontrada'; // Asignar el mensaje
    }
  }

  // Buscar la sección correspondiente al código escaneado
  async findSectionByCodigo(codigo: string) {
    const seccionesCollection = collection(this.firestore, 'secciones');
    const seccionesSnapshot = await getDocs(seccionesCollection);
    const sectionDoc = seccionesSnapshot.docs.find(
      (doc) => doc.data()['codigo'] === codigo
    );
    return sectionDoc ? { ...sectionDoc.data(), id: sectionDoc.id } : null;
  }

  // Actualizar la asistencia de la sección
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
      duration: 2000,
    });
    toast.present();
  }
}
