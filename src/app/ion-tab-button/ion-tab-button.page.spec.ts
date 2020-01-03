import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTabButtonPage } from './ion-tab-button.page';

describe('IonTabButtonPage', () => {
  let component: IonTabButtonPage;
  let fixture: ComponentFixture<IonTabButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTabButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTabButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
