import { Component } from '@angular/core';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage {
  secciones = [
    { codigo: 'D384', descripcion: 'Sección Diurna'},
    { codigo: 'E983', descripcion: 'Sección Vespertina'},
    { codigo: 'E409', descripcion: 'Sección Diurna'},
    { codigo: 'F202', descripcion: 'Sección Diurna'},
    { codigo: 'G103', descripcion: 'Sección Vespertina'},
  ];

  alumnos = [
    { nombre: 'Carlos Pérez', asistencia: Math.random() * 100 },
      { nombre: 'Ana Gómez', asistencia: Math.random() * 100 },
      { nombre: 'Luis Fernández', asistencia: Math.random() * 100 },
      { nombre: 'María Sánchez', asistencia: Math.random() * 100 },
      { nombre: 'Juan Martínez', asistencia: Math.random() * 100 },
      { nombre: 'Paula López', asistencia: Math.random() * 100 },
      { nombre: 'Pedro Díaz', asistencia: Math.random() * 100 },
      { nombre: 'Lucía Romero', asistencia: Math.random() * 100 },
      { nombre: 'Andrés Torres', asistencia: Math.random() * 100 },
      { nombre: 'Marta Ruiz', asistencia: Math.random() * 100 },
      { nombre: 'José Morales', asistencia: Math.random() * 100 },
      { nombre: 'Sofía Jiménez', asistencia: Math.random() * 100 },
      { nombre: 'Ricardo García', asistencia: Math.random() * 100 },
      { nombre: 'Elena Martín', asistencia: Math.random() * 100 },
      { nombre: 'Alberto Pérez', asistencia: Math.random() * 100 },
  ];

  qrImage: string | null = null;
  qrSeccion: any = null;

  obtenerAlumnosAleatorios() {
    let shuffled = this.alumnos.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }

  mostrarQr(seccion: any) {
    this.qrSeccion = seccion;
    this.qrImage = 'assets/qr/qr-code-placeholder.png';

    let alumnosAleatorios = this.obtenerAlumnosAleatorios();
    console.log(alumnosAleatorios);

    this.qrSeccion.alumnosAsistencia = alumnosAleatorios;
  }

  cerrarQr() {
    this.qrImage = null;
    this.qrSeccion = null;
  }
}
