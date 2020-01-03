import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonFabListPage } from './ion-fab-list.page';

describe('IonFabListPage', () => {
  let component: IonFabListPage;
  let fixture: ComponentFixture<IonFabListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonFabListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonFabListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
