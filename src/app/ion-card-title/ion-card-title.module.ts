import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonCardTitlePageRoutingModule } from './ion-card-title-routing.module';

import { IonCardTitlePage } from './ion-card-title.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonCardTitlePageRoutingModule
  ],
  declarations: [IonCardTitlePage]
})
export class IonCardTitlePageModule {}
