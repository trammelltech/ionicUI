import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-modal-controller',
  templateUrl: './ion-modal-controller.page.html',
  styleUrls: ['./ion-modal-controller.page.scss'],
})
export class IonModalControllerPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/modal-controller');
  return browser;
}

}
