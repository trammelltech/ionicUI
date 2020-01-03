import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonCardHeaderPageRoutingModule } from './ion-card-header-routing.module';

import { IonCardHeaderPage } from './ion-card-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonCardHeaderPageRoutingModule
  ],
  declarations: [IonCardHeaderPage]
})
export class IonCardHeaderPageModule {}
