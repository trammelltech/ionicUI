import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonNotePageRoutingModule } from './ion-note-routing.module';

import { IonNotePage } from './ion-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonNotePageRoutingModule
  ],
  declarations: [IonNotePage]
})
export class IonNotePageModule {}
