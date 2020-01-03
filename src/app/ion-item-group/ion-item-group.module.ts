import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonItemGroupPageRoutingModule } from './ion-item-group-routing.module';

import { IonItemGroupPage } from './ion-item-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonItemGroupPageRoutingModule
  ],
  declarations: [IonItemGroupPage]
})
export class IonItemGroupPageModule {}
