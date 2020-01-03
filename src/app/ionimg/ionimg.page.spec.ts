import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonimgPage } from './ionimg.page';

describe('IonimgPage', () => {
  let component: IonimgPage;
  let fixture: ComponentFixture<IonimgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonimgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonimgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
