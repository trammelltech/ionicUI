import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonItemOptionsPage } from './ion-item-options.page';

const routes: Routes = [
  {
    path: '',
    component: IonItemOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonItemOptionsPageRoutingModule {}
