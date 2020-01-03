import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSegmentButtonPage } from './ion-segment-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonSegmentButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSegmentButtonPageRoutingModule {}
