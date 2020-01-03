import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRefresherContentPage } from './ion-refresher-content.page';

describe('IonRefresherContentPage', () => {
  let component: IonRefresherContentPage;
  let fixture: ComponentFixture<IonRefresherContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRefresherContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRefresherContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
