import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonBackdropPageRoutingModule } from './ion-backdrop-routing.module';

import { IonBackdropPage } from './ion-backdrop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBackdropPageRoutingModule
  ],
  declarations: [IonBackdropPage]
})
export class IonBackdropPageModule {}
