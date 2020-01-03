import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonAnchorPage } from './ion-anchor.page';

describe('IonAnchorPage', () => {
  let component: IonAnchorPage;
  let fixture: ComponentFixture<IonAnchorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonAnchorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonAnchorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
