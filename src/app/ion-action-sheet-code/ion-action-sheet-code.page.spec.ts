import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonActionSheetCodePage } from './ion-action-sheet-code.page';

describe('IonActionSheetCodePage', () => {
  let component: IonActionSheetCodePage;
  let fixture: ComponentFixture<IonActionSheetCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonActionSheetCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonActionSheetCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
