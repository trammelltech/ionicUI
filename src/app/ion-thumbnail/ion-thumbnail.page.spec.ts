import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonThumbnailPage } from './ion-thumbnail.page';

describe('IonThumbnailPage', () => {
  let component: IonThumbnailPage;
  let fixture: ComponentFixture<IonThumbnailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonThumbnailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonThumbnailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
