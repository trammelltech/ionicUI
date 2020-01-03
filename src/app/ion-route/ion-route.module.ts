import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRoutePageRoutingModule } from './ion-route-routing.module';

import { IonRoutePage } from './ion-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRoutePageRoutingModule
  ],
  declarations: [IonRoutePage]
})
export class IonRoutePageModule {}
