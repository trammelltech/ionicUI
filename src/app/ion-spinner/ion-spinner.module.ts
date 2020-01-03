import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSpinnerPageRoutingModule } from './ion-spinner-routing.module';

import { IonSpinnerPage } from './ion-spinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSpinnerPageRoutingModule
  ],
  declarations: [IonSpinnerPage]
})
export class IonSpinnerPageModule {}
