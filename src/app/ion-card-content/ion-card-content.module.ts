import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonCardContentPageRoutingModule } from './ion-card-content-routing.module';

import { IonCardContentPage } from './ion-card-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonCardContentPageRoutingModule
  ],
  declarations: [IonCardContentPage]
})
export class IonCardContentPageModule {}
