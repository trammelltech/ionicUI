import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-tab-bar',
  templateUrl: './ion-tab-bar.page.html',
  styleUrls: ['./ion-tab-bar.page.scss'],
})
export class IonTabBarPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/tab-bar');
  return browser;
}

}
