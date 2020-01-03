import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonTextPage } from './ion-text.page';

const routes: Routes = [
  {
    path: '',
    component: IonTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTextPageRoutingModule {}
