import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonItemOptionsPage } from './ion-item-options.page';

describe('IonItemOptionsPage', () => {
  let component: IonItemOptionsPage;
  let fixture: ComponentFixture<IonItemOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonItemOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonItemOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
