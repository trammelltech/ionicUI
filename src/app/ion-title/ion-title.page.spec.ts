import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTitlePage } from './ion-title.page';

describe('IonTitlePage', () => {
  let component: IonTitlePage;
  let fixture: ComponentFixture<IonTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTitlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
