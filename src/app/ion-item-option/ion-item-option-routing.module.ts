import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonItemOptionPage } from './ion-item-option.page';

const routes: Routes = [
  {
    path: '',
    component: IonItemOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonItemOptionPageRoutingModule {}
