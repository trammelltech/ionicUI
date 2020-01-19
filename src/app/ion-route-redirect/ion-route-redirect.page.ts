import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-route-redirect',
  templateUrl: './ion-route-redirect.page.html',
  styleUrls: ['./ion-route-redirect.page.scss'],
})
export class IonRouteRedirectPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/route-redirect');
  return browser;
}

}
