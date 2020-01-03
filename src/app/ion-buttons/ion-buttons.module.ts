import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonButtonsPageRoutingModule } from './ion-buttons-routing.module';

import { IonButtonsPage } from './ion-buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonButtonsPageRoutingModule
  ],
  declarations: [IonButtonsPage]
})
export class IonButtonsPageModule {}
