import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonMenuTogglePage } from './ion-menu-toggle.page';

describe('IonMenuTogglePage', () => {
  let component: IonMenuTogglePage;
  let fixture: ComponentFixture<IonMenuTogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonMenuTogglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonMenuTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
