import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonNavPushPage } from './ion-nav-push.page';

const routes: Routes = [
  {
    path: '',
    component: IonNavPushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonNavPushPageRoutingModule {}
