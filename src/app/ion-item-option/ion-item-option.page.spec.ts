import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonItemOptionPage } from './ion-item-option.page';

describe('IonItemOptionPage', () => {
  let component: IonItemOptionPage;
  let fixture: ComponentFixture<IonItemOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonItemOptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonItemOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
