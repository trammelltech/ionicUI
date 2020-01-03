import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonNavPopPageRoutingModule } from './ion-nav-pop-routing.module';

import { IonNavPopPage } from './ion-nav-pop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonNavPopPageRoutingModule
  ],
  declarations: [IonNavPopPage]
})
export class IonNavPopPageModule {}
