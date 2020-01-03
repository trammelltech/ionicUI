import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonMenuTogglePageRoutingModule } from './ion-menu-toggle-routing.module';

import { IonMenuTogglePage } from './ion-menu-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonMenuTogglePageRoutingModule
  ],
  declarations: [IonMenuTogglePage]
})
export class IonMenuTogglePageModule {}
