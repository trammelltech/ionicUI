import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonPopoverControllerPageRoutingModule } from './ion-popover-controller-routing.module';

import { IonPopoverControllerPage } from './ion-popover-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonPopoverControllerPageRoutingModule
  ],
  declarations: [IonPopoverControllerPage]
})
export class IonPopoverControllerPageModule {}
