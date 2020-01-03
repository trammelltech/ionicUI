import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonItemOptionsPageRoutingModule } from './ion-item-options-routing.module';

import { IonItemOptionsPage } from './ion-item-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonItemOptionsPageRoutingModule
  ],
  declarations: [IonItemOptionsPage]
})
export class IonItemOptionsPageModule {}
