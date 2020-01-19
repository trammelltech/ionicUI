import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-alert-controller',
  templateUrl: './ion-alert-controller.page.html',
  styleUrls: ['./ion-alert-controller.page.scss'],
})
export class IonAlertControllerPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/alert-controller');
  return browser;
}

}
