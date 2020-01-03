import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonAnchorPageRoutingModule } from './ion-anchor-routing.module';

import { IonAnchorPage } from './ion-anchor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonAnchorPageRoutingModule
  ],
  declarations: [IonAnchorPage]
})
export class IonAnchorPageModule {}
