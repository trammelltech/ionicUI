import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSplitPanePageRoutingModule } from './ion-split-pane-routing.module';

import { IonSplitPanePage } from './ion-split-pane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSplitPanePageRoutingModule
  ],
  declarations: [IonSplitPanePage]
})
export class IonSplitPanePageModule {}
