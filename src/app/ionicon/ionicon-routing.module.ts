import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IoniconPage } from './ionicon.page';

const routes: Routes = [
  {
    path: '',
    component: IoniconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IoniconPageRoutingModule {}
