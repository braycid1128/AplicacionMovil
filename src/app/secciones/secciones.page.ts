import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {
  secciones: any[] = []; // Array para almacenar las secciones
  loading = true; // Indicador de carga
  error: string | null = null; // Mensaje de error

  constructor(private firestore: Firestore, private router: Router) {} // Inyección de Router

  goToAdminPage() {
    this.router.navigate(['/administrarseccion']);
  }

  async ngOnInit() {
    try {
      const seccionesCollection = collection(this.firestore, 'secciones');
      const seccionesSnapshot = await getDocs(seccionesCollection);
      this.secciones = seccionesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      this.error = 'Hubo un error al cargar las secciones.';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
}
