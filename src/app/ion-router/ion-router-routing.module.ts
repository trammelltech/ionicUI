import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRouterPage } from './ion-router.page';

const routes: Routes = [
  {
    path: '',
    component: IonRouterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRouterPageRoutingModule {}
