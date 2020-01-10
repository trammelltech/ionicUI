import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonActionSheetPageRoutingModule } from './ion-action-sheet-routing.module';

import { IonActionSheetPage } from './ion-action-sheet.page';
import { IonActionSheetCodePage } from '../ion-action-sheet-code/ion-action-sheet-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonActionSheetPageRoutingModule
  ],
  declarations: [IonActionSheetPage,
    IonActionSheetCodePage],
    entryComponents: [IonActionSheetCodePage]
})
export class IonActionSheetPageModule {}
