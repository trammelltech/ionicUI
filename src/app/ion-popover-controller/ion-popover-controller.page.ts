import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-popover-controller',
  templateUrl: './ion-popover-controller.page.html',
  styleUrls: ['./ion-popover-controller.page.scss'],
})
export class IonPopoverControllerPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/popover-controller');
  return browser;
}

}
