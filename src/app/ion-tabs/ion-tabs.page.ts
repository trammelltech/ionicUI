import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-tabs',
  templateUrl: './ion-tabs.page.html',
  styleUrls: ['./ion-tabs.page.scss'],
})
export class IonTabsPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/tabs');
  return browser;
}

}
