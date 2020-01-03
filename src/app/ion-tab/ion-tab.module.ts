import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTabPageRoutingModule } from './ion-tab-routing.module';

import { IonTabPage } from './ion-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTabPageRoutingModule
  ],
  declarations: [IonTabPage]
})
export class IonTabPageModule {}
