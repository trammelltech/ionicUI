import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonProgressBarPage } from './ion-progress-bar.page';

describe('IonProgressBarPage', () => {
  let component: IonProgressBarPage;
  let fixture: ComponentFixture<IonProgressBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonProgressBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonProgressBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
