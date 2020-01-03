import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonMenuButtonPage } from './ion-menu-button.page';

describe('IonMenuButtonPage', () => {
  let component: IonMenuButtonPage;
  let fixture: ComponentFixture<IonMenuButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonMenuButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonMenuButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
