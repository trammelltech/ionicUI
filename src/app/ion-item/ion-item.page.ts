import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-item',
  templateUrl: './ion-item.page.html',
  styleUrls: ['./ion-item.page.scss'],
})
export class IonItemPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/item');
  return browser;
}

}
