import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonActionSheetCodePageRoutingModule } from './ion-action-sheet-code-routing.module';

import { IonActionSheetCodePage } from './ion-action-sheet-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonActionSheetCodePageRoutingModule
  ],
  declarations: [IonActionSheetCodePage]
})
export class IonActionSheetCodePageModule {}
