import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IoniconPageRoutingModule } from './ionicon-routing.module';

import { IoniconPage } from './ionicon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IoniconPageRoutingModule
  ],
  declarations: [IoniconPage]
})
export class IoniconPageModule {}
