import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonItemGroupPage } from './ion-item-group.page';

const routes: Routes = [
  {
    path: '',
    component: IonItemGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonItemGroupPageRoutingModule {}
