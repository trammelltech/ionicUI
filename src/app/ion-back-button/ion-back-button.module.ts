import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonBackButtonPageRoutingModule } from './ion-back-button-routing.module';

import { IonBackButtonPage } from './ion-back-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBackButtonPageRoutingModule
  ],
  declarations: [IonBackButtonPage]
})
export class IonBackButtonPageModule {}
