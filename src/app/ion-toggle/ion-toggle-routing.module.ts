import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonTogglePage } from './ion-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: IonTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTogglePageRoutingModule {}
