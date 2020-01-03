import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonFabButtonPage } from './ion-fab-button.page';

describe('IonFabButtonPage', () => {
  let component: IonFabButtonPage;
  let fixture: ComponentFixture<IonFabButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonFabButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonFabButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
