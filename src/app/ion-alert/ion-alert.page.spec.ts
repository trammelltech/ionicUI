import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonAlertPage } from './ion-alert.page';

describe('IonAlertPage', () => {
  let component: IonAlertPage;
  let fixture: ComponentFixture<IonAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonAlertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
