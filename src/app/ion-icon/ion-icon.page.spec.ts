import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonIconPage } from './ion-icon.page';

describe('IonIconPage', () => {
  let component: IonIconPage;
  let fixture: ComponentFixture<IonIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonIconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
