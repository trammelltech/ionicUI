import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-router-link',
  templateUrl: './ion-router-link.page.html',
  styleUrls: ['./ion-router-link.page.scss'],
})
export class IonRouterLinkPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/router-link');
  return browser;
}

}
