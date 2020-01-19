import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-item-sliding',
  templateUrl: './ion-item-sliding.page.html',
  styleUrls: ['./ion-item-sliding.page.scss'],
})
export class IonItemSlidingPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/item-sliding');
  return browser;
}

}
