import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRowPageRoutingModule } from './ion-row-routing.module';

import { IonRowPage } from './ion-row.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRowPageRoutingModule
  ],
  declarations: [IonRowPage]
})
export class IonRowPageModule {}
