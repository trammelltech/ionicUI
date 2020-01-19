import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-nav',
  templateUrl: './ion-nav.page.html',
  styleUrls: ['./ion-nav.page.scss'],
})
export class IonNavPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/nav');
  return browser;
}

}
