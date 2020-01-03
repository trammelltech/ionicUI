import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonNavPage } from './ion-nav.page';

const routes: Routes = [
  {
    path: '',
    component: IonNavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonNavPageRoutingModule {}
