import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-route',
  templateUrl: './ion-route.page.html',
  styleUrls: ['./ion-route.page.scss'],
})
export class IonRoutePage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/route');
  return browser;
}

}
