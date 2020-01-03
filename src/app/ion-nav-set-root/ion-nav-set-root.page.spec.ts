import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonNavSetRootPage } from './ion-nav-set-root.page';

describe('IonNavSetRootPage', () => {
  let component: IonNavSetRootPage;
  let fixture: ComponentFixture<IonNavSetRootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonNavSetRootPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonNavSetRootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
