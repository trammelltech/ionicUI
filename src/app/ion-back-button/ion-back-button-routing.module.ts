import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonBackButtonPage } from './ion-back-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonBackButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonBackButtonPageRoutingModule {}
