import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanearPage } from './escanear.page';
import { IonicModule } from '@ionic/angular';

describe('EscanearPage', () => {
  let component: EscanearPage;
  let fixture: ComponentFixture<EscanearPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscanearPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscanearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
