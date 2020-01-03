import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonLoadingControllerPageRoutingModule } from './ion-loading-controller-routing.module';

import { IonLoadingControllerPage } from './ion-loading-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonLoadingControllerPageRoutingModule
  ],
  declarations: [IonLoadingControllerPage]
})
export class IonLoadingControllerPageModule {}
