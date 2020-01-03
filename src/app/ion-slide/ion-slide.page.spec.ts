import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSlidePage } from './ion-slide.page';

describe('IonSlidePage', () => {
  let component: IonSlidePage;
  let fixture: ComponentFixture<IonSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
