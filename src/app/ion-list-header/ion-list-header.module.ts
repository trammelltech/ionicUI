import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonListHeaderPageRoutingModule } from './ion-list-header-routing.module';

import { IonListHeaderPage } from './ion-list-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonListHeaderPageRoutingModule
  ],
  declarations: [IonListHeaderPage]
})
export class IonListHeaderPageModule {}
