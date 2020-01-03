import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonMenuControllerPageRoutingModule } from './ion-menu-controller-routing.module';

import { IonMenuControllerPage } from './ion-menu-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonMenuControllerPageRoutingModule
  ],
  declarations: [IonMenuControllerPage]
})
export class IonMenuControllerPageModule {}
