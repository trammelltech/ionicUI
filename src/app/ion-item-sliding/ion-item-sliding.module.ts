import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonItemSlidingPageRoutingModule } from './ion-item-sliding-routing.module';

import { IonItemSlidingPage } from './ion-item-sliding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonItemSlidingPageRoutingModule
  ],
  declarations: [IonItemSlidingPage]
})
export class IonItemSlidingPageModule {}
