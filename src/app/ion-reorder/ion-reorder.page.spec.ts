import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonReorderPage } from './ion-reorder.page';

describe('IonReorderPage', () => {
  let component: IonReorderPage;
  let fixture: ComponentFixture<IonReorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonReorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonReorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
