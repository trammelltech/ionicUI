import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonTabButtonPage } from './ion-tab-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonTabButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTabButtonPageRoutingModule {}
