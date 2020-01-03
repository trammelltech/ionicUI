import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonProgressBarPageRoutingModule } from './ion-progress-bar-routing.module';

import { IonProgressBarPage } from './ion-progress-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonProgressBarPageRoutingModule
  ],
  declarations: [IonProgressBarPage]
})
export class IonProgressBarPageModule {}
