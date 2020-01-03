import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSplitPanePage } from './ion-split-pane.page';

describe('IonSplitPanePage', () => {
  let component: IonSplitPanePage;
  let fixture: ComponentFixture<IonSplitPanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSplitPanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSplitPanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
