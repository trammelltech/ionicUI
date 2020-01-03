import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRoutePage } from './ion-route.page';

describe('IonRoutePage', () => {
  let component: IonRoutePage;
  let fixture: ComponentFixture<IonRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
