import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonFabListPageRoutingModule } from './ion-fab-list-routing.module';

import { IonFabListPage } from './ion-fab-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonFabListPageRoutingModule
  ],
  declarations: [IonFabListPage]
})
export class IonFabListPageModule {}
