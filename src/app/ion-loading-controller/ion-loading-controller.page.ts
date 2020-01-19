import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-loading-controller',
  templateUrl: './ion-loading-controller.page.html',
  styleUrls: ['./ion-loading-controller.page.scss'],
})
export class IonLoadingControllerPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/loading-controller');
  return browser;
}

}
