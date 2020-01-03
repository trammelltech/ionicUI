import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSkeletonTextPageRoutingModule } from './ion-skeleton-text-routing.module';

import { IonSkeletonTextPage } from './ion-skeleton-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSkeletonTextPageRoutingModule
  ],
  declarations: [IonSkeletonTextPage]
})
export class IonSkeletonTextPageModule {}
