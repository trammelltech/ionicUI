import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonFooterPageRoutingModule } from './ion-footer-routing.module';

import { IonFooterPage } from './ion-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonFooterPageRoutingModule
  ],
  declarations: [IonFooterPage]
})
export class IonFooterPageModule {}
