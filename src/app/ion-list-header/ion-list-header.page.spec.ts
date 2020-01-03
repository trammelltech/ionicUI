import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonListHeaderPage } from './ion-list-header.page';

describe('IonListHeaderPage', () => {
  let component: IonListHeaderPage;
  let fixture: ComponentFixture<IonListHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonListHeaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonListHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
