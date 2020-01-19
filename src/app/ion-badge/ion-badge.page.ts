import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-badge',
  templateUrl: './ion-badge.page.html',
  styleUrls: ['./ion-badge.page.scss'],
})
export class IonBadgePage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/badge');
  return browser;
}

}
