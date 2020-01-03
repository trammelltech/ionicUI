import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonToastControllerPage } from './ion-toast-controller.page';

describe('IonToastControllerPage', () => {
  let component: IonToastControllerPage;
  let fixture: ComponentFixture<IonToastControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonToastControllerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonToastControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
