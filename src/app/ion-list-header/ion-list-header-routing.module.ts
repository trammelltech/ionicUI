import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonListHeaderPage } from './ion-list-header.page';

const routes: Routes = [
  {
    path: '',
    component: IonListHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonListHeaderPageRoutingModule {}
