import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSegmentButtonPageRoutingModule } from './ion-segment-button-routing.module';

import { IonSegmentButtonPage } from './ion-segment-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSegmentButtonPageRoutingModule
  ],
  declarations: [IonSegmentButtonPage]
})
export class IonSegmentButtonPageModule {}
