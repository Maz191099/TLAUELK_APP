import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageModelPage } from './image-model.page';

describe('ImageModelPage', () => {
  let component: ImageModelPage;
  let fixture: ComponentFixture<ImageModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
