import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonModalControllerPage } from './ion-modal-controller.page';

const routes: Routes = [
  {
    path: '',
    component: IonModalControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonModalControllerPageRoutingModule {}
