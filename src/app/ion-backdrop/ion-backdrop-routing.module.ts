import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonBackdropPage } from './ion-backdrop.page';

const routes: Routes = [
  {
    path: '',
    component: IonBackdropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonBackdropPageRoutingModule {}
