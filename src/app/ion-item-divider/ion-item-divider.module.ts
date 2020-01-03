import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonItemDividerPageRoutingModule } from './ion-item-divider-routing.module';

import { IonItemDividerPage } from './ion-item-divider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonItemDividerPageRoutingModule
  ],
  declarations: [IonItemDividerPage]
})
export class IonItemDividerPageModule {}
