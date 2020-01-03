import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonNotePage } from './ion-note.page';

const routes: Routes = [
  {
    path: '',
    component: IonNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonNotePageRoutingModule {}
