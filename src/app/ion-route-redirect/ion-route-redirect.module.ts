import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRouteRedirectPageRoutingModule } from './ion-route-redirect-routing.module';

import { IonRouteRedirectPage } from './ion-route-redirect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRouteRedirectPageRoutingModule
  ],
  declarations: [IonRouteRedirectPage]
})
export class IonRouteRedirectPageModule {}
