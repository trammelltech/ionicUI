import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRouterOutletPage } from './ion-router-outlet.page';

describe('IonRouterOutletPage', () => {
  let component: IonRouterOutletPage;
  let fixture: ComponentFixture<IonRouterOutletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRouterOutletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRouterOutletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
