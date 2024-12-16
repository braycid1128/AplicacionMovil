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
  barcodes: Barcode[] = [];
  isSupported = false;
  scannedMessage: string = '';
  isScanning: boolean = false; // Variable para controlar el estado del escáner

  constructor(
    private firestore: Firestore,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
      console.log('Soporte para escaneo: ', this.isSupported);
    });
  }

  // Iniciar el escaneo
  async scan(): Promise<void> {
    if (this.isScanning) {
      console.log("Escaneo ya en proceso...");
      return; // Evitar iniciar otro escaneo mientras el anterior esté en proceso
    }

    console.log("Iniciando escaneo...");
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentToast('Permiso denegado. Autoriza la cámara.');
      return;
    }

    this.isScanning = true; // Marcar como en proceso de escaneo

    const { barcodes } = await BarcodeScanner.scan();
    console.log('Resultados del escaneo:', barcodes);

    if (barcodes && barcodes.length > 0) {
      this.barcodes.push(...barcodes);
      barcodes.forEach((barcode) => {
        if (barcode.rawValue) {
          this.handleScan(barcode.rawValue);
        }
      });
    } else {
      console.log('No se escaneó ningún código.');
    }

    this.isScanning = false; // Finalizar el estado de escaneo
  }

  // Solicitar permisos
  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.checkPermissions();
    console.log('Permisos solicitados:', camera);
    if (camera === 'granted' || camera === 'limited') {
      return true;
    } else {
      const { camera: newPermission } = await BarcodeScanner.requestPermissions();
      console.log('Nuevo intento de permisos:', newPermission);
      return newPermission === 'granted' || newPermission === 'limited';
    }
  }

  // Manejar el código escaneado
  async handleScan(codigoEscaneado: string) {
    const section = await this.findSectionByCodigo(codigoEscaneado);

    if (section) {
      await this.updateAttendance(section);
      this.scannedMessage = 'Código escaneado correctamente';
    } else {
      console.log('Sección no encontrada');
      this.scannedMessage = 'Sección no encontrada';
    }
  }

  // Buscar la sección por código
  async findSectionByCodigo(codigo: string) {
    const seccionesCollection = collection(this.firestore, 'secciones');
    const seccionesSnapshot = await getDocs(seccionesCollection);
    const sectionDoc = seccionesSnapshot.docs.find(
      (doc) => doc.data()['codigo'] === codigo
    );
    return sectionDoc ? { ...sectionDoc.data(), id: sectionDoc.id } : null;
  }

  // Actualizar asistencia
  async updateAttendance(section: any) {
    const scannedCount = section.scannedCount || 0;
    const cantidadDias = section.cantidadDias || 1;

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

  // Mostrar toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
