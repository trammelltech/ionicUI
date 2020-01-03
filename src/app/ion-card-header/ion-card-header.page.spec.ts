import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonCardHeaderPage } from './ion-card-header.page';

describe('IonCardHeaderPage', () => {
  let component: IonCardHeaderPage;
  let fixture: ComponentFixture<IonCardHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCardHeaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonCardHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
