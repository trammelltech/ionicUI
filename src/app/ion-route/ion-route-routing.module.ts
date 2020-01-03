import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRoutePage } from './ion-route.page';

const routes: Routes = [
  {
    path: '',
    component: IonRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRoutePageRoutingModule {}
