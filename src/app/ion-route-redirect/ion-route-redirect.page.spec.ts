import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRouteRedirectPage } from './ion-route-redirect.page';

describe('IonRouteRedirectPage', () => {
  let component: IonRouteRedirectPage;
  let fixture: ComponentFixture<IonRouteRedirectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRouteRedirectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRouteRedirectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
