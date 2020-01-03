import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonToastControllerPage } from './ion-toast-controller.page';

const routes: Routes = [
  {
    path: '',
    component: IonToastControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonToastControllerPageRoutingModule {}
