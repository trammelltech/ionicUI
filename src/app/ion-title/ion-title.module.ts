import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTitlePageRoutingModule } from './ion-title-routing.module';

import { IonTitlePage } from './ion-title.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTitlePageRoutingModule
  ],
  declarations: [IonTitlePage]
})
export class IonTitlePageModule {}
