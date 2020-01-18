import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonTabsPage } from './ion-tabs.page';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTabsPageRoutingModule {}
