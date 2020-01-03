import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonCardTitlePage } from './ion-card-title.page';

describe('IonCardTitlePage', () => {
  let component: IonCardTitlePage;
  let fixture: ComponentFixture<IonCardTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCardTitlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonCardTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
