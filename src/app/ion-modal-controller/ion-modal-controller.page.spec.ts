import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonModalControllerPage } from './ion-modal-controller.page';

describe('IonModalControllerPage', () => {
  let component: IonModalControllerPage;
  let fixture: ComponentFixture<IonModalControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonModalControllerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonModalControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
