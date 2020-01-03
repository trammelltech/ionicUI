import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonColPage } from './ion-col.page';

const routes: Routes = [
  {
    path: '',
    component: IonColPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonColPageRoutingModule {}
