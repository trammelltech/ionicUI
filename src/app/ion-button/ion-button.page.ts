import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-button',
  templateUrl: './ion-button.page.html',
  styleUrls: ['./ion-button.page.scss'],
})
export class IonButtonPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/button');
  return browser;
}

}
