import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonThumbnailPageRoutingModule } from './ion-thumbnail-routing.module';

import { IonThumbnailPage } from './ion-thumbnail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonThumbnailPageRoutingModule
  ],
  declarations: [IonThumbnailPage]
})
export class IonThumbnailPageModule {}
