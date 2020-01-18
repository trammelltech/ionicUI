import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackButtonForwardPage } from './back-button-forward.page';

describe('BackButtonForwardPage', () => {
  let component: BackButtonForwardPage;
  let fixture: ComponentFixture<BackButtonForwardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackButtonForwardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackButtonForwardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
