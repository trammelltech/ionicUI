import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-card',
  templateUrl: './ion-card.page.html',
  styleUrls: ['./ion-card.page.scss'],
})
export class IonCardPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/card');
  return browser;
}

}
 