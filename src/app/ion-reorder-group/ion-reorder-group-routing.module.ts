import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonReorderGroupPage } from './ion-reorder-group.page';

const routes: Routes = [
  {
    path: '',
    component: IonReorderGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonReorderGroupPageRoutingModule {}
