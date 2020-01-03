import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonAlertControllerPageRoutingModule } from './ion-alert-controller-routing.module';

import { IonAlertControllerPage } from './ion-alert-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonAlertControllerPageRoutingModule
  ],
  declarations: [IonAlertControllerPage]
})
export class IonAlertControllerPageModule {}
