import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonThumbnailPage } from './ion-thumbnail.page';

const routes: Routes = [
  {
    path: '',
    component: IonThumbnailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonThumbnailPageRoutingModule {}
