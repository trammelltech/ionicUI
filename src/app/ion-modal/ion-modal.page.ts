import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.page.html',
  styleUrls: ['./ion-modal.page.scss'],
})
export class IonModalPage implements OnInit {

  constructor(
    public modalController: ModalController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/modal');
  return browser;
}

  async presentModalPage() {
    const modal = await this.modalController.create({
        component: ModalpagePage,
        componentProps: { item: Object.assign({}, ) }
    });
    await modal.present();
}
}
