import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonAppPage } from './ion-app.page';

const routes: Routes = [
  {
    path: '',
    component: IonAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonAppPageRoutingModule {}
