import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonCardContentPage } from './ion-card-content.page';

describe('IonCardContentPage', () => {
  let component: IonCardContentPage;
  let fixture: ComponentFixture<IonCardContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCardContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonCardContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
