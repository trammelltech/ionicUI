import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSegmentButtonPage } from './ion-segment-button.page';

describe('IonSegmentButtonPage', () => {
  let component: IonSegmentButtonPage;
  let fixture: ComponentFixture<IonSegmentButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSegmentButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSegmentButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
