import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonPopoverControllerPage } from './ion-popover-controller.page';

const routes: Routes = [
  {
    path: '',
    component: IonPopoverControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonPopoverControllerPageRoutingModule {}
