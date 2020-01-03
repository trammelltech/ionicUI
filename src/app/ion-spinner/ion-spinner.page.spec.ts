import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSpinnerPage } from './ion-spinner.page';

describe('IonSpinnerPage', () => {
  let component: IonSpinnerPage;
  let fixture: ComponentFixture<IonSpinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSpinnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSpinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
