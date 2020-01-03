import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonItemDividerPage } from './ion-item-divider.page';

const routes: Routes = [
  {
    path: '',
    component: IonItemDividerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonItemDividerPageRoutingModule {}
