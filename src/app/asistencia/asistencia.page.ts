import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  courses = [
    { name: 'Arquitectura', percentage: 0 },
    { name: 'Calidad De Software', percentage: 0 },
    { name: 'Estadística Descriptiva', percentage: 0 },
    { name: 'Ética Para El Trabajo', percentage: 0 },
    { name: 'Fundamentos De Machine Learning', percentage: 0 }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.animateProgress();
    }, 500);
  }

  animateProgress() {
    this.courses = [
      { name: 'Arquitectura', percentage: 60 },
      { name: 'Calidad De Software', percentage: 66.7 },
      { name: 'Estadística Descriptiva', percentage: 66.7 },
      { name: 'Ética Para El Trabajo', percentage: 75 },
      { name: 'Fundamentos De Machine Learning', percentage: 60 }
    ];
  }
}
