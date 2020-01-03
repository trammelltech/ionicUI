import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonFabPage } from './ion-fab.page';

describe('IonFabPage', () => {
  let component: IonFabPage;
  let fixture: ComponentFixture<IonFabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonFabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonFabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
