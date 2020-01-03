import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonimgPageRoutingModule } from './ionimg-routing.module';

import { IonimgPage } from './ionimg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonimgPageRoutingModule
  ],
  declarations: [IonimgPage]
})
export class IonimgPageModule {}
