import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTogglePageRoutingModule } from './ion-toggle-routing.module';

import { IonTogglePage } from './ion-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTogglePageRoutingModule
  ],
  declarations: [IonTogglePage]
})
export class IonTogglePageModule {}
