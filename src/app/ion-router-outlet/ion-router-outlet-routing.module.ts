import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRouterOutletPage } from './ion-router-outlet.page';

const routes: Routes = [
  {
    path: '',
    component: IonRouterOutletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRouterOutletPageRoutingModule {}
