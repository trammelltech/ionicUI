import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonCardSubtitlePageRoutingModule } from './ion-card-subtitle-routing.module';

import { IonCardSubtitlePage } from './ion-card-subtitle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonCardSubtitlePageRoutingModule
  ],
  declarations: [IonCardSubtitlePage]
})
export class IonCardSubtitlePageModule {}
