import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTextPage } from './ion-text.page';

describe('IonTextPage', () => {
  let component: IonTextPage;
  let fixture: ComponentFixture<IonTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
