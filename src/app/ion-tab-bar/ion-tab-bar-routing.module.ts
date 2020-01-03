import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonTabBarPage } from './ion-tab-bar.page';

const routes: Routes = [
  {
    path: '',
    component: IonTabBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTabBarPageRoutingModule {}
