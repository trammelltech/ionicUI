import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonColPageRoutingModule } from './ion-col-routing.module';

import { IonColPage } from './ion-col.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonColPageRoutingModule
  ],
  declarations: [IonColPage]
})
export class IonColPageModule {}
