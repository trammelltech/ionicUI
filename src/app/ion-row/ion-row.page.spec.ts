import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRowPage } from './ion-row.page';

describe('IonRowPage', () => {
  let component: IonRowPage;
  let fixture: ComponentFixture<IonRowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
