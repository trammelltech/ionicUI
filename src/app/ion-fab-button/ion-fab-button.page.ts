import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-fab-button',
  templateUrl: './ion-fab-button.page.html',
  styleUrls: ['./ion-fab-button.page.scss'],
})
export class IonFabButtonPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/fab-button');
  return browser;
}

}
