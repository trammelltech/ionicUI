import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiIndexPage } from './api-index.page';

const routes: Routes = [
  {
    path: '',
    component: ApiIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiIndexPageRoutingModule {}
