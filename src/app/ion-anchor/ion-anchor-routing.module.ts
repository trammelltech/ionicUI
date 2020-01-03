import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonAnchorPage } from './ion-anchor.page';

const routes: Routes = [
  {
    path: '',
    component: IonAnchorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonAnchorPageRoutingModule {}
