import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonBackButtonPage } from './ion-back-button.page';

describe('IonBackButtonPage', () => {
  let component: IonBackButtonPage;
  let fixture: ComponentFixture<IonBackButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonBackButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonBackButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
