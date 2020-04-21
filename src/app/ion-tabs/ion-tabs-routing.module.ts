import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonTabsPage } from './ion-tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'ion-tabs',
    component: IonTabsPage,
    children:
      [
        {
          path: 'tab1',
          children:
            [
              {
                path: '',
                loadChildren: '../tab1/tab1.module#Tab1PageModule'
              }
            ]
        },
        {
          path: 'tab2',
          children:
            [
              {
                path: '',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
              }
            ]
        },
        {
          path: 'tab3',
          children:
            [
              {
                path: '',
                loadChildren: '../tab3/tab3.module#Tab3PageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'ion-tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [IonicModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class IonTabsPageRoutingModule {}
