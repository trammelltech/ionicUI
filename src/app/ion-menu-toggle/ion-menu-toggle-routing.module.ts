import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonMenuTogglePage } from './ion-menu-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: IonMenuTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonMenuTogglePageRoutingModule {}
