import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonMenuButtonPageRoutingModule } from './ion-menu-button-routing.module';

import { IonMenuButtonPage } from './ion-menu-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonMenuButtonPageRoutingModule
  ],
  declarations: [IonMenuButtonPage]
})
export class IonMenuButtonPageModule {}
