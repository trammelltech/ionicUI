import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonNavPushPage } from './ion-nav-push.page';

describe('IonNavPushPage', () => {
  let component: IonNavPushPage;
  let fixture: ComponentFixture<IonNavPushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonNavPushPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonNavPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
