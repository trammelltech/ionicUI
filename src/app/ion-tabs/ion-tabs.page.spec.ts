import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTabsPage } from './ion-tabs.page';

describe('IonTabsPage', () => {
  let component: IonTabsPage;
  let fixture: ComponentFixture<IonTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
