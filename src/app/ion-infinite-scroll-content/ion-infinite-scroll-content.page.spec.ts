import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonInfiniteScrollContentPage } from './ion-infinite-scroll-content.page';

describe('IonInfiniteScrollContentPage', () => {
  let component: IonInfiniteScrollContentPage;
  let fixture: ComponentFixture<IonInfiniteScrollContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonInfiniteScrollContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonInfiniteScrollContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
