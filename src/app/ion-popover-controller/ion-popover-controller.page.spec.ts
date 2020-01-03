import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonPopoverControllerPage } from './ion-popover-controller.page';

describe('IonPopoverControllerPage', () => {
  let component: IonPopoverControllerPage;
  let fixture: ComponentFixture<IonPopoverControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonPopoverControllerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonPopoverControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
