import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonPickerControllerPage } from './ion-picker-controller.page';

const routes: Routes = [
  {
    path: '',
    component: IonPickerControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonPickerControllerPageRoutingModule {}
