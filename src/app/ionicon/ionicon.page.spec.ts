import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IoniconPage } from './ionicon.page';

describe('IoniconPage', () => {
  let component: IoniconPage;
  let fixture: ComponentFixture<IoniconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoniconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IoniconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
