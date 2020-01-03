import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonToastPage } from './ion-toast.page';

describe('IonToastPage', () => {
  let component: IonToastPage;
  let fixture: ComponentFixture<IonToastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonToastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonToastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
