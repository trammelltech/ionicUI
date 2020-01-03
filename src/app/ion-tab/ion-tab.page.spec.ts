import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTabPage } from './ion-tab.page';

describe('IonTabPage', () => {
  let component: IonTabPage;
  let fixture: ComponentFixture<IonTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
