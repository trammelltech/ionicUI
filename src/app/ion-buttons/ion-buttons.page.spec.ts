import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonButtonsPage } from './ion-buttons.page';

describe('IonButtonsPage', () => {
  let component: IonButtonsPage;
  let fixture: ComponentFixture<IonButtonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonButtonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
