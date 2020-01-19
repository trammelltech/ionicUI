import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-item-option',
  templateUrl: './ion-item-option.page.html',
  styleUrls: ['./ion-item-option.page.scss'],
})
export class IonItemOptionPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/item-option');
  return browser;
}

}
