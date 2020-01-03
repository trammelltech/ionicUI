import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRowPage } from './ion-row.page';

const routes: Routes = [
  {
    path: '',
    component: IonRowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRowPageRoutingModule {}
