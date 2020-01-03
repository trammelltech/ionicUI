import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonItemSlidingPage } from './ion-item-sliding.page';

describe('IonItemSlidingPage', () => {
  let component: IonItemSlidingPage;
  let fixture: ComponentFixture<IonItemSlidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonItemSlidingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonItemSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
