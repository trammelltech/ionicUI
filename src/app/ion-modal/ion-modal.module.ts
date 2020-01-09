import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonModalPageRoutingModule } from './ion-modal-routing.module';

import { IonModalPage } from './ion-modal.page';

import { ModalpagePage } from '../modalpage/modalpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonModalPageRoutingModule
  ],
  declarations: [IonModalPage,
    ModalpagePage],
  entryComponents: [ModalpagePage],
})
export class IonModalPageModule {}
