import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSplitPanePage } from './ion-split-pane.page';

const routes: Routes = [
  {
    path: '',
    component: IonSplitPanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSplitPanePageRoutingModule {}
