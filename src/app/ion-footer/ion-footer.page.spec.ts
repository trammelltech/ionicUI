import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonFooterPage } from './ion-footer.page';

describe('IonFooterPage', () => {
  let component: IonFooterPage;
  let fixture: ComponentFixture<IonFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonFooterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
