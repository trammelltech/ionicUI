import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-router-outlet',
  templateUrl: './ion-router-outlet.page.html',
  styleUrls: ['./ion-router-outlet.page.scss'],
})
export class IonRouterOutletPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/router-outlet');
  return browser;
}

}
