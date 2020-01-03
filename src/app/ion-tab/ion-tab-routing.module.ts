import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonTabPage } from './ion-tab.page';

const routes: Routes = [
  {
    path: '',
    component: IonTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTabPageRoutingModule {}
