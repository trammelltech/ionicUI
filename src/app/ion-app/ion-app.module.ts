import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonAppPageRoutingModule } from './ion-app-routing.module';

import { IonAppPage } from './ion-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonAppPageRoutingModule
  ],
  declarations: [IonAppPage]
})
export class IonAppPageModule {}
