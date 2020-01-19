import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-loading',
  templateUrl: './ion-loading.page.html',
  styleUrls: ['./ion-loading.page.scss'],
})
export class IonLoadingPage implements OnInit {

  constructor(public loadingController: LoadingController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/loading');
  return browser;
}
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hello There',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please Wait...',
      translucent: true,
    });
    return await loading.present();
  }
}
