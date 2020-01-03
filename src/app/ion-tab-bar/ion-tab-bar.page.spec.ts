import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTabBarPage } from './ion-tab-bar.page';

describe('IonTabBarPage', () => {
  let component: IonTabBarPage;
  let fixture: ComponentFixture<IonTabBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTabBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTabBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
