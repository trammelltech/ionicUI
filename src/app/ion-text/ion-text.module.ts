import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTextPageRoutingModule } from './ion-text-routing.module';

import { IonTextPage } from './ion-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTextPageRoutingModule
  ],
  declarations: [IonTextPage]
})
export class IonTextPageModule {}
