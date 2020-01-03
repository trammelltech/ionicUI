import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonTitlePage } from './ion-title.page';

const routes: Routes = [
  {
    path: '',
    component: IonTitlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTitlePageRoutingModule {}
