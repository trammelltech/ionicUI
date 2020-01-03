import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRefresherPage } from './ion-refresher.page';

describe('IonRefresherPage', () => {
  let component: IonRefresherPage;
  let fixture: ComponentFixture<IonRefresherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRefresherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
