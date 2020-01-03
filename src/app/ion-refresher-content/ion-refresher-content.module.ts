import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRefresherContentPageRoutingModule } from './ion-refresher-content-routing.module';

import { IonRefresherContentPage } from './ion-refresher-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRefresherContentPageRoutingModule
  ],
  declarations: [IonRefresherContentPage]
})
export class IonRefresherContentPageModule {}
