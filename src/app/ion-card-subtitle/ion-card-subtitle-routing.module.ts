import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonCardSubtitlePage } from './ion-card-subtitle.page';

const routes: Routes = [
  {
    path: '',
    component: IonCardSubtitlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonCardSubtitlePageRoutingModule {}
