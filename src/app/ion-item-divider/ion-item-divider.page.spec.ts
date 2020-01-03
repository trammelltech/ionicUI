import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonItemDividerPage } from './ion-item-divider.page';

describe('IonItemDividerPage', () => {
  let component: IonItemDividerPage;
  let fixture: ComponentFixture<IonItemDividerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonItemDividerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonItemDividerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
