import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiIndexPage } from './api-index.page';

describe('ApiIndexPage', () => {
  let component: ApiIndexPage;
  let fixture: ComponentFixture<ApiIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
