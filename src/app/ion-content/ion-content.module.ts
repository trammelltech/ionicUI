import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonContentPageRoutingModule } from './ion-content-routing.module';

import { IonContentPage } from './ion-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonContentPageRoutingModule
  ],
  declarations: [IonContentPage]
})
export class IonContentPageModule {}
