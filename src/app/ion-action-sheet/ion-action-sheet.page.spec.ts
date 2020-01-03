import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonActionSheetPage } from './ion-action-sheet.page';

describe('IonActionSheetPage', () => {
  let component: IonActionSheetPage;
  let fixture: ComponentFixture<IonActionSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonActionSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
