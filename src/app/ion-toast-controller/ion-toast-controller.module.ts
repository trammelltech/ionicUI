import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonToastControllerPageRoutingModule } from './ion-toast-controller-routing.module';

import { IonToastControllerPage } from './ion-toast-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonToastControllerPageRoutingModule
  ],
  declarations: [IonToastControllerPage]
})
export class IonToastControllerPageModule {}
