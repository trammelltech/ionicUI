import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonAlertControllerPage } from './ion-alert-controller.page';

describe('IonAlertControllerPage', () => {
  let component: IonAlertControllerPage;
  let fixture: ComponentFixture<IonAlertControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonAlertControllerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonAlertControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
