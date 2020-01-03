import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonPickerControllerPage } from './ion-picker-controller.page';

describe('IonPickerControllerPage', () => {
  let component: IonPickerControllerPage;
  let fixture: ComponentFixture<IonPickerControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonPickerControllerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonPickerControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
