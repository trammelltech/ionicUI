import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSkeletonTextPage } from './ion-skeleton-text.page';

const routes: Routes = [
  {
    path: '',
    component: IonSkeletonTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSkeletonTextPageRoutingModule {}
