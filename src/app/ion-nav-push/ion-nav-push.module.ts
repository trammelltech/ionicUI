import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonNavPushPageRoutingModule } from './ion-nav-push-routing.module';

import { IonNavPushPage } from './ion-nav-push.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonNavPushPageRoutingModule
  ],
  declarations: [IonNavPushPage]
})
export class IonNavPushPageModule {}
