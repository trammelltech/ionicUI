import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonReorderGroupPage } from './ion-reorder-group.page';

describe('IonReorderGroupPage', () => {
  let component: IonReorderGroupPage;
  let fixture: ComponentFixture<IonReorderGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonReorderGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonReorderGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
