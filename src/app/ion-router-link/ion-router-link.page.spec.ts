import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRouterLinkPage } from './ion-router-link.page';

describe('IonRouterLinkPage', () => {
  let component: IonRouterLinkPage;
  let fixture: ComponentFixture<IonRouterLinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRouterLinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRouterLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
