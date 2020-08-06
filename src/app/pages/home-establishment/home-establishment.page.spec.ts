import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeEstablishmentPage } from './home-establishment.page';

describe('HomeEstablishmentPage', () => {
  let component: HomeEstablishmentPage;
  let fixture: ComponentFixture<HomeEstablishmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEstablishmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEstablishmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
