import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonColPage } from './ion-col.page';

describe('IonColPage', () => {
  let component: IonColPage;
  let fixture: ComponentFixture<IonColPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonColPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonColPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
