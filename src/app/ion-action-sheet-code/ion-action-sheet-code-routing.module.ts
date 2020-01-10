import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonActionSheetCodePage } from './ion-action-sheet-code.page';

const routes: Routes = [
  {
    path: '',
    component: IonActionSheetCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonActionSheetCodePageRoutingModule {}
