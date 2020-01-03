import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRouterPageRoutingModule } from './ion-router-routing.module';

import { IonRouterPage } from './ion-router.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRouterPageRoutingModule
  ],
  declarations: [IonRouterPage]
})
export class IonRouterPageModule {}
