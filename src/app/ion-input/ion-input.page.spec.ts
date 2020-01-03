import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonInputPage } from './ion-input.page';

describe('IonInputPage', () => {
  let component: IonInputPage;
  let fixture: ComponentFixture<IonInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonInputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
