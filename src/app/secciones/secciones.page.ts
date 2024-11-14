import { Component } from '@angular/core';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage {
  // Lista de secciones (esto lo puedes obtener de una API o base de datos)
  secciones = [
    { codigo: 'D384', descripcion: 'Sección Diurna'},
    { codigo: 'E983', descripcion: 'Sección Vespertina'},
    { codigo: 'E409', descripcion: 'Sección Diurna'},
    { codigo: 'F202', descripcion: 'Sección Diurna'},
    { codigo: 'G103', descripcion: 'Sección Vespertina'},
    // Agrega más secciones según lo necesario
  ];

  // Lista de alumnos simulada
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

  // Para mostrar el código QR
  qrImage: string | null = null;
  qrSeccion: any = null;

  // Método para seleccionar 10 alumnos al azar
  obtenerAlumnosAleatorios() {
    // Mezclar la lista de alumnos y seleccionar los primeros 10
    let shuffled = this.alumnos.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }

  // Método que se llama al hacer click en una sección
  mostrarQr(seccion: any) {
    this.qrSeccion = seccion;
    this.qrImage = 'assets/qr/qr-code-placeholder.png'; // Aquí iría el código para generar el QR

    // Mostrar la lista de alumnos y sus asistencias al azar
    let alumnosAleatorios = this.obtenerAlumnosAleatorios();
    console.log(alumnosAleatorios); // Para revisar en consola, puedes mostrarlo en la interfaz también

    // Puedes pasar esta información para mostrarla en la interfaz
    // Por ejemplo, añadirla a la variable que se usará en el HTML
    this.qrSeccion.alumnosAsistencia = alumnosAleatorios;
  }

  // Método para cerrar el QR
  cerrarQr() {
    this.qrImage = null;
    this.qrSeccion = null;
  }
}
