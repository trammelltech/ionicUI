import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonModalControllerPageRoutingModule } from './ion-modal-controller-routing.module';

import { IonModalControllerPage } from './ion-modal-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonModalControllerPageRoutingModule
  ],
  declarations: [IonModalControllerPage]
})
export class IonModalControllerPageModule {}
