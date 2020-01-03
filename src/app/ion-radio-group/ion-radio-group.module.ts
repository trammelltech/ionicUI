import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRadioGroupPageRoutingModule } from './ion-radio-group-routing.module';

import { IonRadioGroupPage } from './ion-radio-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRadioGroupPageRoutingModule
  ],
  declarations: [IonRadioGroupPage]
})
export class IonRadioGroupPageModule {}
