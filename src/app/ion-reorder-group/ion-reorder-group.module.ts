import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonReorderGroupPageRoutingModule } from './ion-reorder-group-routing.module';

import { IonReorderGroupPage } from './ion-reorder-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonReorderGroupPageRoutingModule
  ],
  declarations: [IonReorderGroupPage]
})
export class IonReorderGroupPageModule {}
