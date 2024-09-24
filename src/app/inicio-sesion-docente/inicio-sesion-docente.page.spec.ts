import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionDocentePage } from './inicio-sesion-docente.page';

describe('InicioSesionPage', () => {
  let component: InicioSesionDocentePage;
  let fixture: ComponentFixture<InicioSesionDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
