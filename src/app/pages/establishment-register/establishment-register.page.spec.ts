import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstablishmentRegisterPage } from './establishment-register.page';

describe('EstablishmentRegisterPage', () => {
  let component: EstablishmentRegisterPage;
  let fixture: ComponentFixture<EstablishmentRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstablishmentRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
