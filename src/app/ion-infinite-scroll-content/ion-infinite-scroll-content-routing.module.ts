import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonInfiniteScrollContentPage } from './ion-infinite-scroll-content.page';

const routes: Routes = [
  {
    path: '',
    component: IonInfiniteScrollContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonInfiniteScrollContentPageRoutingModule {}
