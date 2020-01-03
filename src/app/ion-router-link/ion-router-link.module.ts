import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRouterLinkPageRoutingModule } from './ion-router-link-routing.module';

import { IonRouterLinkPage } from './ion-router-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRouterLinkPageRoutingModule
  ],
  declarations: [IonRouterLinkPage]
})
export class IonRouterLinkPageModule {}
