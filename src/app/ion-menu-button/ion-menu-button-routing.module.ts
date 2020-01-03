import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonMenuButtonPage } from './ion-menu-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonMenuButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonMenuButtonPageRoutingModule {}
