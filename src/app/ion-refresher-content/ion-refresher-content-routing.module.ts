import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRefresherContentPage } from './ion-refresher-content.page';

const routes: Routes = [
  {
    path: '',
    component: IonRefresherContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRefresherContentPageRoutingModule {}
