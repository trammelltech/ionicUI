import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRadioGroupPage } from './ion-radio-group.page';

describe('IonRadioGroupPage', () => {
  let component: IonRadioGroupPage;
  let fixture: ComponentFixture<IonRadioGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRadioGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRadioGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
