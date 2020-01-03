import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonNavSetRootPageRoutingModule } from './ion-nav-set-root-routing.module';

import { IonNavSetRootPage } from './ion-nav-set-root.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonNavSetRootPageRoutingModule
  ],
  declarations: [IonNavSetRootPage]
})
export class IonNavSetRootPageModule {}
