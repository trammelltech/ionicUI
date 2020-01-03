import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTogglePage } from './ion-toggle.page';

describe('IonTogglePage', () => {
  let component: IonTogglePage;
  let fixture: ComponentFixture<IonTogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTogglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
