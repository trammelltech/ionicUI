import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonActionSheetControllerPageRoutingModule } from './ion-action-sheet-controller-routing.module';

import { IonActionSheetControllerPage } from './ion-action-sheet-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonActionSheetControllerPageRoutingModule
  ],
  declarations: [IonActionSheetControllerPage]
})
export class IonActionSheetControllerPageModule {}
