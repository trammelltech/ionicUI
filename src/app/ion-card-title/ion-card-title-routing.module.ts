import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonCardTitlePage } from './ion-card-title.page';

const routes: Routes = [
  {
    path: '',
    component: IonCardTitlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonCardTitlePageRoutingModule {}
