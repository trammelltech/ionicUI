import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonMenuControllerPage } from './ion-menu-controller.page';

const routes: Routes = [
  {
    path: '',
    component: IonMenuControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonMenuControllerPageRoutingModule {}
