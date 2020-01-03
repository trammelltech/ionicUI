import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonPickerControllerPageRoutingModule } from './ion-picker-controller-routing.module';

import { IonPickerControllerPage } from './ion-picker-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonPickerControllerPageRoutingModule
  ],
  declarations: [IonPickerControllerPage]
})
export class IonPickerControllerPageModule {}
