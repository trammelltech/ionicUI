import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTabBarPageRoutingModule } from './ion-tab-bar-routing.module';

import { IonTabBarPage } from './ion-tab-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTabBarPageRoutingModule
  ],
  declarations: [IonTabBarPage]
})
export class IonTabBarPageModule {}
