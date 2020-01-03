import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonAppPage } from './ion-app.page';

describe('IonAppPage', () => {
  let component: IonAppPage;
  let fixture: ComponentFixture<IonAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
