import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonNotePage } from './ion-note.page';

describe('IonNotePage', () => {
  let component: IonNotePage;
  let fixture: ComponentFixture<IonNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
