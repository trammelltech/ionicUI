import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonNavPopPage } from './ion-nav-pop.page';

describe('IonNavPopPage', () => {
  let component: IonNavPopPage;
  let fixture: ComponentFixture<IonNavPopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonNavPopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonNavPopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
