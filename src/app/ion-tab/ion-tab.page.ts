import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-tab',
  templateUrl: './ion-tab.page.html',
  styleUrls: ['./ion-tab.page.scss'],
})
export class IonTabPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/tab');
  return browser;
}

}
