import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-refresher-content',
  templateUrl: './ion-refresher-content.page.html',
  styleUrls: ['./ion-refresher-content.page.scss'],
})
export class IonRefresherContentPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/refresher-content');
  return browser;
}

}
