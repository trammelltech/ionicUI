import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonItemOptionPageRoutingModule } from './ion-item-option-routing.module';

import { IonItemOptionPage } from './ion-item-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonItemOptionPageRoutingModule
  ],
  declarations: [IonItemOptionPage]
})
export class IonItemOptionPageModule {}
