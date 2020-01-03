import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRouterLinkPage } from './ion-router-link.page';

const routes: Routes = [
  {
    path: '',
    component: IonRouterLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRouterLinkPageRoutingModule {}
