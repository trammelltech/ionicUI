import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-item-divider',
  templateUrl: './ion-item-divider.page.html',
  styleUrls: ['./ion-item-divider.page.scss'],
})
export class IonItemDividerPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/item-divider');
  return browser;
}

}
