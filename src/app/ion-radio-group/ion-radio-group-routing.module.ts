import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRadioGroupPage } from './ion-radio-group.page';

const routes: Routes = [
  {
    path: '',
    component: IonRadioGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRadioGroupPageRoutingModule {}
