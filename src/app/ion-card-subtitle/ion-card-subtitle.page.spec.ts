import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonCardSubtitlePage } from './ion-card-subtitle.page';

describe('IonCardSubtitlePage', () => {
  let component: IonCardSubtitlePage;
  let fixture: ComponentFixture<IonCardSubtitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCardSubtitlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonCardSubtitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
