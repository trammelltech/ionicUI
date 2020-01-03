import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonActionSheetControllerPage } from './ion-action-sheet-controller.page';

describe('IonActionSheetControllerPage', () => {
  let component: IonActionSheetControllerPage;
  let fixture: ComponentFixture<IonActionSheetControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonActionSheetControllerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonActionSheetControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
