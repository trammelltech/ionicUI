import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonimgPage } from './ionimg.page';

const routes: Routes = [
  {
    path: '',
    component: IonimgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonimgPageRoutingModule {}
