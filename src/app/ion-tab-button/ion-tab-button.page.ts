import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-tab-button',
  templateUrl: './ion-tab-button.page.html',
  styleUrls: ['./ion-tab-button.page.scss'],
})
export class IonTabButtonPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/tab-button');
  return browser;
}

}
