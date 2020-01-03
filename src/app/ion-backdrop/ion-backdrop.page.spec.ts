import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonBackdropPage } from './ion-backdrop.page';

describe('IonBackdropPage', () => {
  let component: IonBackdropPage;
  let fixture: ComponentFixture<IonBackdropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonBackdropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonBackdropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
