import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTextareaPage } from './ion-textarea.page';

describe('IonTextareaPage', () => {
  let component: IonTextareaPage;
  let fixture: ComponentFixture<IonTextareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTextareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTextareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
