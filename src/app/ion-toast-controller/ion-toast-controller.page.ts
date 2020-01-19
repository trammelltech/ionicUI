import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-toast-controller',
  templateUrl: './ion-toast-controller.page.html',
  styleUrls: ['./ion-toast-controller.page.scss'],
})
export class IonToastControllerPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/toast-controller');
  return browser;
}

}
