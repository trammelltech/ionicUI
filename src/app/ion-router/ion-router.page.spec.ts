import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRouterPage } from './ion-router.page';

describe('IonRouterPage', () => {
  let component: IonRouterPage;
  let fixture: ComponentFixture<IonRouterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRouterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
