import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonItemGroupPage } from './ion-item-group.page';

describe('IonItemGroupPage', () => {
  let component: IonItemGroupPage;
  let fixture: ComponentFixture<IonItemGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonItemGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonItemGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
