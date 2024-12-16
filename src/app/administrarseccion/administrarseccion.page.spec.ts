import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrarseccionPage } from './administrarseccion.page';

describe('AdministrarseccionPage', () => {
  let component: AdministrarseccionPage;
  let fixture: ComponentFixture<AdministrarseccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarseccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
