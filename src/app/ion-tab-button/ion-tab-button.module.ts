import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTabButtonPageRoutingModule } from './ion-tab-button-routing.module';

import { IonTabButtonPage } from './ion-tab-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTabButtonPageRoutingModule
  ],
  declarations: [IonTabButtonPage]
})
export class IonTabButtonPageModule {}
