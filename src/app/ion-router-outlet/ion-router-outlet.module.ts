import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRouterOutletPageRoutingModule } from './ion-router-outlet-routing.module';

import { IonRouterOutletPage } from './ion-router-outlet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRouterOutletPageRoutingModule
  ],
  declarations: [IonRouterOutletPage]
})
export class IonRouterOutletPageModule {}
