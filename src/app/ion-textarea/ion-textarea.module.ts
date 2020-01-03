import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonTextareaPageRoutingModule } from './ion-textarea-routing.module';

import { IonTextareaPage } from './ion-textarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonTextareaPageRoutingModule
  ],
  declarations: [IonTextareaPage]
})
export class IonTextareaPageModule {}
