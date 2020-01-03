import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSelectOptionPage } from './ion-select-option.page';

describe('IonSelectOptionPage', () => {
  let component: IonSelectOptionPage;
  let fixture: ComponentFixture<IonSelectOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSelectOptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSelectOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
