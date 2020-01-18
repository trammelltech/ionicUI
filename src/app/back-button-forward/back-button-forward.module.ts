import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackButtonForwardPageRoutingModule } from './back-button-forward-routing.module';

import { BackButtonForwardPage } from './back-button-forward.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonForwardPageRoutingModule
  ],
  declarations: [BackButtonForwardPage]
})
export class BackButtonForwardPageModule {}
