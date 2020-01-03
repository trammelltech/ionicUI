import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonNavPage } from './ion-nav.page';

describe('IonNavPage', () => {
  let component: IonNavPage;
  let fixture: ComponentFixture<IonNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonNavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
