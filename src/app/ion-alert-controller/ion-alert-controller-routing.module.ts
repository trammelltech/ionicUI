import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonAlertControllerPage } from './ion-alert-controller.page';

const routes: Routes = [
  {
    path: '',
    component: IonAlertControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonAlertControllerPageRoutingModule {}
