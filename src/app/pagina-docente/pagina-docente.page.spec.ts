import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaDocentePage } from './pagina-docente.page';

describe('PaginaDocentePage', () => {
  let component: PaginaDocentePage;
  let fixture: ComponentFixture<PaginaDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
