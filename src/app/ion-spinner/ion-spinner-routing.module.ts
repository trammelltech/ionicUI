import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSpinnerPage } from './ion-spinner.page';

const routes: Routes = [
  {
    path: '',
    component: IonSpinnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSpinnerPageRoutingModule {}
