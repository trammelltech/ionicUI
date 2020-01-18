import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackButtonForwardPage } from './back-button-forward.page';

const routes: Routes = [
  {
    path: '',
    component: BackButtonForwardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackButtonForwardPageRoutingModule {}
