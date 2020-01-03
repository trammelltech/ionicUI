import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRouteRedirectPage } from './ion-route-redirect.page';

const routes: Routes = [
  {
    path: '',
    component: IonRouteRedirectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRouteRedirectPageRoutingModule {}
