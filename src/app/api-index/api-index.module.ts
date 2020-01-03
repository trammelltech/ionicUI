import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiIndexPageRoutingModule } from './api-index-routing.module';

import { ApiIndexPage } from './api-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiIndexPageRoutingModule
  ],
  declarations: [ApiIndexPage]
})
export class ApiIndexPageModule {}
