import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSkeletonTextPage } from './ion-skeleton-text.page';

describe('IonSkeletonTextPage', () => {
  let component: IonSkeletonTextPage;
  let fixture: ComponentFixture<IonSkeletonTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSkeletonTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSkeletonTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
