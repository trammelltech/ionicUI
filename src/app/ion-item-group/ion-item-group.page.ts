import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-item-group',
  templateUrl: './ion-item-group.page.html',
  styleUrls: ['./ion-item-group.page.scss'],
})
export class IonItemGroupPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/item-group');
  return browser;
}

}
