import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaEstudiantePage } from './pagina-estudiante.page';

describe('PaginaEstudiantePage', () => {
  let component: PaginaEstudiantePage;
  let fixture: ComponentFixture<PaginaEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
